const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// AWS S3 설정 (선택사항)
let s3, AWS;
if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
  try {
    AWS = require('aws-sdk');
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION || 'ap-northeast-2'
    });
    s3 = new AWS.S3();
    console.log('🌥️ AWS S3 클라우드 저장소 연결됨');
  } catch (error) {
    console.warn('⚠️ AWS SDK 설치되지 않음, 로컬 저장소 사용:', error.message);
  }
}

const app = express();
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'crystal-church-secret-key';

// 실시간 연결 관리
io.on('connection', (socket) => {
  console.log('👤 새로운 관리자 연결:', socket.id);
  
  socket.on('join_admin', (token) => {
    try {
      const user = jwt.verify(token, JWT_SECRET);
      socket.join('admin_room');
      socket.user = user;
      console.log('🔐 관리자 인증 완료:', user.username);
    } catch (error) {
      console.error('❌ 토큰 검증 실패:', error);
      socket.emit('auth_error', '인증에 실패했습니다.');
    }
  });

  socket.on('disconnect', () => {
    console.log('👋 관리자 연결 해제:', socket.id);
  });
});

// CORS 설정
app.use(cors());
app.use(express.json());

// 데이터베이스 초기화
const dbPath = path.join(__dirname, 'crystal_church.db');
const db = new sqlite3.Database(dbPath);

// 데이터베이스 테이블 생성
db.serialize(() => {
  // 사용자 테이블
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // 새신자 테이블
  db.run(`CREATE TABLE IF NOT EXISTS newcomers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    address TEXT,
    birth_date TEXT,
    visit_reason TEXT,
    previous_church TEXT,
    baptism TEXT,
    interests TEXT,
    status TEXT DEFAULT '신규 등록',
    stage TEXT DEFAULT '1차 양육 대기',
    notes TEXT,
    registration_date DATE DEFAULT CURRENT_DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // 양육 자료 테이블
  db.run(`CREATE TABLE IF NOT EXISTS newcomer_resources (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    newcomer_id INTEGER,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    type TEXT DEFAULT 'link',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (newcomer_id) REFERENCES newcomers (id)
  )`);

  // 기본 관리자 계정 생성
  const hashedPassword = bcrypt.hashSync('crystal2024', 10);
  db.run(`INSERT OR IGNORE INTO users (username, password, role) VALUES (?, ?, ?)`, 
    ['admin', hashedPassword, 'admin']);
});

// JWT 미들웨어
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// 로그인 API
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err || !user) {
      return res.status(401).json({ success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET);
      res.json({ 
        success: true, 
        token, 
        user: { username: user.username, role: user.role } 
      });
    } else {
      res.status(401).json({ success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
    }
  });
});

// 새신자 등록 API
app.post('/api/newcomers', (req, res) => {
  const newcomerData = req.body;
  
  const query = `INSERT INTO newcomers 
    (name, phone, email, address, birth_date, visit_reason, previous_church, baptism, interests, notes) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  const values = [
    newcomerData.name,
    newcomerData.phone,
    newcomerData.email || '',
    newcomerData.address || '',
    newcomerData.birthDate || '',
    newcomerData.visitReason || '',
    newcomerData.previousChurch || '',
    newcomerData.baptism || '',
    JSON.stringify(newcomerData.interests || []),
    newcomerData.questions || '새가족으로 등록 완료'
  ];

  db.run(query, values, function(err) {
    if (err) {
      console.error('새신자 등록 오류:', err);
      return res.status(500).json({ success: false, message: '등록 중 오류가 발생했습니다.' });
    }

    const newcomerId = this.lastID;
    
    // 기본 양육 자료 추가
    const defaultResources = [
      { title: '새가족 정착 시스템', url: 'https://accurate-spinach-48b.notion.site/23ee40ba5bcd80a39653e5afa2ccf094', type: 'notion' },
      { title: '새가족 멘토 교재', url: 'https://accurate-spinach-48b.notion.site/23ee40ba5bcd80eeb3e4e106baead2a5', type: 'notion' }
    ];

    defaultResources.forEach(resource => {
      db.run('INSERT INTO newcomer_resources (newcomer_id, title, url, type) VALUES (?, ?, ?, ?)',
        [newcomerId, resource.title, resource.url, resource.type]);
    });

    // 등록된 새신자 정보 구성
    const newNewcomer = {
      id: newcomerId,
      ...newcomerData,
      interests: newcomerData.interests || [],
      status: '신규 등록',
      stage: '1차 양육 대기',
      notes: newcomerData.questions || '새가족으로 등록 완료',
      registration_date: new Date().toISOString().split('T')[0],
      created_at: new Date().toISOString(),
      resources: defaultResources
    };

    // 실시간 알림 전송 (모든 관리자에게)
    io.to('admin_room').emit('newcomer_registered', {
      type: 'NEW_REGISTRATION',
      newcomer: newNewcomer,
      message: `🎉 새신자 ${newcomerData.name}님이 등록되었습니다!`,
      timestamp: new Date().toISOString()
    });

    console.log('📢 실시간 알림 전송: 새신자 등록 -', newcomerData.name);

    res.json({ 
      success: true, 
      message: '새신자 등록이 완료되었습니다.',
      id: newcomerId 
    });
  });
});

// 새신자 목록 조회 API (인증 필요)
app.get('/api/newcomers', authenticateToken, (req, res) => {
  const query = `SELECT * FROM newcomers ORDER BY created_at DESC`;
  
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('새신자 목록 조회 오류:', err);
      return res.status(500).json({ success: false, message: '데이터 조회 중 오류가 발생했습니다.' });
    }

    // 각 새신자의 양육 자료도 함께 조회
    const newcomersWithResources = [];
    let completed = 0;

    if (rows.length === 0) {
      return res.json({ success: true, newcomers: [] });
    }

    rows.forEach(newcomer => {
      db.all('SELECT * FROM newcomer_resources WHERE newcomer_id = ?', [newcomer.id], (err, resources) => {
        newcomersWithResources.push({
          ...newcomer,
          interests: newcomer.interests ? JSON.parse(newcomer.interests) : [],
          resources: resources || []
        });
        
        completed++;
        if (completed === rows.length) {
          res.json({ success: true, newcomers: newcomersWithResources });
        }
      });
    });
  });
});

// 새신자 정보 수정 API (인증 필요)
app.put('/api/newcomers/:id', authenticateToken, (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  
  const query = `UPDATE newcomers SET 
    name = ?, phone = ?, email = ?, status = ?, stage = ?, notes = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?`;
  
  const values = [
    updateData.name,
    updateData.phone,
    updateData.email,
    updateData.status,
    updateData.stage,
    updateData.notes,
    id
  ];

  db.run(query, values, function(err) {
    if (err) {
      console.error('새신자 정보 수정 오류:', err);
      return res.status(500).json({ success: false, message: '수정 중 오류가 발생했습니다.' });
    }

    // 수정된 새신자 정보 구성
    const updatedNewcomer = {
      id: id,
      ...updateData,
      interests: updateData.interests || [],
      status: updateData.status || '신규 등록',
      stage: updateData.stage || '1차 양육 대기',
      notes: updateData.notes || '새가족으로 등록 완료',
      updated_at: new Date().toISOString(),
      resources: [] // 양육 자료는 수정하지 않음
    };

    // 실시간 알림 전송 (모든 관리자에게)
    io.to('admin_room').emit('newcomer_updated', {
      type: 'NEWCOMER_UPDATED',
      newcomer: updatedNewcomer,
      message: `🔄 새신자 ${updateData.name}님의 정보가 수정되었습니다.`,
      timestamp: new Date().toISOString()
    });

    console.log('📢 실시간 알림 전송: 새신자 수정 -', updateData.name);

    res.json({ success: true, message: '새신자 정보가 수정되었습니다.' });
  });
});

// 양육 자료 추가 API (인증 필요)
app.post('/api/newcomers/:id/resources', authenticateToken, (req, res) => {
  const newcomerId = req.params.id;
  const { title, url, type } = req.body;
  
  db.run('INSERT INTO newcomer_resources (newcomer_id, title, url, type) VALUES (?, ?, ?, ?)',
    [newcomerId, title, url, type], function(err) {
      if (err) {
        console.error('양육 자료 추가 오류:', err);
        return res.status(500).json({ success: false, message: '자료 추가 중 오류가 발생했습니다.' });
      }

      res.json({ success: true, message: '양육 자료가 추가되었습니다.', id: this.lastID });
    });
});

// 업로드된 파일들을 저장할 디렉토리 생성
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer 설정 - 파일 업로드 처리
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // 파일명 중복 방지를 위해 타임스탬프 추가
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB 제한
  },
  fileFilter: function (req, file, cb) {
    // 허용된 파일 타입만 업로드
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('지원하지 않는 파일 형식입니다.'));
    }
  }
});

// 파일 업로드 API
app.post('/api/upload', (req, res) => {
  upload.array('files', 10)(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Multer 에러 처리
      console.error('Multer 에러:', err);
      return res.status(400).json({
        success: false,
        message: '파일 업로드 중 오류가 발생했습니다.',
        error: err.message
      });
    } else if (err) {
      // 기타 에러 처리
      console.error('파일 업로드 에러:', err);
      return res.status(400).json({
        success: false,
        message: err.message,
        error: err.message
      });
    }

    // 파일이 업로드되지 않은 경우
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: '업로드할 파일을 선택해주세요.'
      });
    }

    try {
      // 카드 인덱스를 쿼리 파라미터에서 가져오거나 기본값 0 사용
      const cardIndex = req.query.cardIndex || 0;
      
      // 업로드된 파일들의 이름을 카드 인덱스를 포함하도록 변경
      const uploadedFiles = req.files.map(file => {
        const oldPath = file.path;
        const newFilename = `files-${cardIndex}-${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        const newPath = path.join(uploadDir, newFilename);
        
        // 파일 이름 변경
        const fs = require('fs');
        fs.renameSync(oldPath, newPath);
        
        return {
          originalName: file.originalname,
          filename: newFilename,
          size: file.size,
          mimetype: file.mimetype,
          url: `/api/files/${newFilename}`,
          uploadedAt: new Date().toISOString(),
          cardIndex: cardIndex
        };
      });

      console.log('업로드된 파일들:', uploadedFiles);

      res.json({
        success: true,
        message: '파일이 성공적으로 업로드되었습니다.',
        files: uploadedFiles
      });
    } catch (error) {
      console.error('파일 처리 중 에러:', error);
      res.status(500).json({
        success: false,
        message: '파일 업로드 중 오류가 발생했습니다.',
        error: error.message
      });
    }
  });
});

// 파일 다운로드 API
app.get('/api/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadDir, filename);
  
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({
      success: false,
      message: '파일을 찾을 수 없습니다.'
    });
  }
});

// 업로드된 파일 목록 조회 API
app.get('/api/files', (req, res) => {
  try {
    const files = fs.readdirSync(uploadDir).map(filename => {
      const filePath = path.join(uploadDir, filename);
      const stats = fs.statSync(filePath);
      return {
        filename: filename,
        size: stats.size,
        uploadedAt: stats.mtime.toISOString(),
        url: `/api/files/${filename}`
      };
    });
    
    res.json({
      success: true,
      files: files
    });
  } catch (error) {
    console.error('파일 목록 조회 에러:', error);
    res.status(500).json({
      success: false,
      message: '파일 목록을 불러오는데 실패했습니다.',
      error: error.message
    });
  }
});

// 파일 삭제 API
app.delete('/api/files/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadDir, filename);
  
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      res.json({
        success: true,
        message: '파일이 성공적으로 삭제되었습니다.'
      });
    } catch (error) {
      console.error('파일 삭제 에러:', error);
      res.status(500).json({
        success: false,
        message: '파일 삭제 중 오류가 발생했습니다.',
        error: error.message
      });
    }
  } else {
    res.status(404).json({
      success: false,
      message: '파일을 찾을 수 없습니다.'
    });
  }
});

// 서버 상태 확인 API
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: '서버가 정상적으로 작동 중입니다.',
    timestamp: new Date().toISOString(),
    uploadDir: uploadDir,
    database: dbPath
  });
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error('서버 에러:', err);
  res.status(500).json({
    success: false,
    message: '서버 내부 오류가 발생했습니다.',
    error: err.message
  });
});

server.listen(PORT, () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`📁 파일 업로드 디렉토리: ${uploadDir}`);
  console.log(`🗄️ 데이터베이스: ${dbPath}`);
  console.log(`🌐 API 엔드포인트: http://localhost:${PORT}/api`);
  console.log(`🔄 실시간 동기화: Socket.io 활성화`);
  console.log(`👤 기본 관리자 계정: admin / crystal2024`);
  if (s3) {
    console.log(`☁️ AWS S3 클라우드 저장소 연결됨`);
  } else {
    console.log(`📦 로컬 파일 저장소 사용`);
  }
}); 
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// CORS 설정
app.use(cors());
app.use(express.json());

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
    uploadDir: uploadDir
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

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`파일 업로드 디렉토리: ${uploadDir}`);
  console.log(`API 엔드포인트: http://localhost:${PORT}/api`);
}); 
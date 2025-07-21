# Crystal Church File Upload Server

파일 업로드 및 다운로드를 위한 Express.js 서버입니다.

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 서버 실행
```bash
# 개발 모드 (자동 재시작)
npm run dev

# 프로덕션 모드
npm start
```

서버는 기본적으로 `http://localhost:3001`에서 실행됩니다.

## API 엔드포인트

### 파일 업로드
- **POST** `/api/upload`
- **Content-Type**: `multipart/form-data`
- **Body**: `files` (여러 파일 가능)
- **Response**: 업로드된 파일 정보

### 파일 다운로드
- **GET** `/api/files/:filename`
- **Response**: 파일 다운로드

### 파일 목록 조회
- **GET** `/api/files`
- **Response**: 업로드된 모든 파일 목록

### 파일 삭제
- **DELETE** `/api/files/:filename`
- **Response**: 삭제 결과

### 서버 상태 확인
- **GET** `/api/health`
- **Response**: 서버 상태 정보

## 지원 파일 형식

- 이미지: `.jpg`, `.jpeg`, `.png`, `.gif`
- 문서: `.pdf`, `.doc`, `.docx`, `.txt`
- 최대 파일 크기: 10MB

## 파일 저장 위치

업로드된 파일들은 `uploads/` 디렉토리에 저장됩니다.

## CORS 설정

서버는 모든 도메인에서의 요청을 허용하도록 CORS가 설정되어 있습니다.

## 환경 변수

- `PORT`: 서버 포트 (기본값: 3001)

## 프론트엔드 연동

프론트엔드에서는 `http://localhost:3001/api`를 기본 URL로 사용합니다.

## 주의사항

1. 프로덕션 환경에서는 적절한 보안 설정을 추가하세요
2. 파일 업로드 제한을 서버 용량에 맞게 조정하세요
3. 정기적으로 불필요한 파일들을 정리하세요 
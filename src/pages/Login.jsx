import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Login.module.css';

/**
 * 로그인 페이지 컴포넌트
 */
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // 로그인 후 이동할 페이지 (로그인 전에 접근하려던 페이지 또는 홈)
  const from = location.state?.from?.pathname || '/';
  
  // 접근하려는 페이지에 따라 표시할 팀 이름 결정
  const getTeamName = () => {
    if (from.includes('/community/education-team')) {
      return '교육팀';
    } else if (from.includes('/community/worship-team')) {
      return '찬양팀';
    }
    return '관리자';
  };

  const teamName = getTeamName();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 서버 API로 로그인 시도
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();

      if (result.success && result.token) {
        // 서버 로그인 성공
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        console.log('✅ 서버 로그인 성공:', result.user);
        navigate(from, { replace: true });
      } else {
        throw new Error(result.message || '로그인 실패');
      }
    } catch (error) {
      console.warn('⚠️ 서버 로그인 실패, 로컬 인증으로 폴백:', error);
      
      // 서버 실패 시 기존 로컬 인증으로 폴백
      if (username === 'admin' && password === 'crystal2024') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({ username: 'admin' }));
        console.log('📋 로컬 인증 성공 (서버 연결 없음)');
        navigate(from, { replace: true });
      } else {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>로그인 - 수정교회</title>
        <meta name="description" content="수정교회 로그인 페이지입니다." />
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.header}>
            <img src="/crystal-logo.png" alt="수정교회 로고" className={styles.logo} />
            <h1>로그인</h1>
            <p>{teamName} 페이지 접근을 위해 로그인해 주세요.</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {error && <div className={styles.error}>{error}</div>}
            
            <div className={styles.inputGroup}>
              <label htmlFor="username">아이디</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="아이디를 입력하세요"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </form>

          <div className={styles.info}>
            <h3>테스트 계정</h3>
            <p><strong>아이디:</strong> admin</p>
            <p><strong>비밀번호:</strong> crystal2024</p>
            <small>실제 운영 시에는 별도의 계정 관리 시스템이 필요합니다.</small>
          </div>
        </div>
      </div>
    </>
  );
} 
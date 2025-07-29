import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * 로그인이 필요한 페이지를 보호하는 컴포넌트
 * 로그인하지 않은 사용자는 로그인 페이지로 리다이렉트
 */
export default function ProtectedRoute({ children }) {
  const location = useLocation();
  
  // 로그인 상태 확인 (localStorage에서)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    // 로그인하지 않은 경우, 현재 위치 정보와 함께 로그인 페이지로 이동
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // 로그인한 경우, 요청된 컴포넌트 렌더링
  return children;
} 
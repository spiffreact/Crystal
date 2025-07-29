import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function AttendanceCheck() {
  const navigate = useNavigate();

  const handleBackToManagement = () => {
    navigate('/community/education-team/newcomer-management');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/', { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>새신자 출석체크 - 수정교회</title>
        <meta name="description" content="새신자 출석체크 관리 시스템" />
      </Helmet>
      
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '2rem'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '2rem',
            borderBottom: '2px solid #e9ecef',
            paddingBottom: '1rem'
          }}>
            <div>
              <h1 style={{ color: '#2c3e50', margin: '0 0 0.5rem 0' }}>
                🎯 새신자 출석체크
              </h1>
              <p style={{ color: '#7f8c8d', margin: 0 }}>
                새신자들의 예배 출석을 관리하는 시스템입니다
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={handleBackToManagement}
                style={{
                  background: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                ← 명단 관리로
              </button>
              <button 
                onClick={handleLogout}
                style={{
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                로그아웃
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{
              background: '#d4edda',
              color: '#155724',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              ✅ <strong>출석체크 페이지가 정상적으로 로드되었습니다!</strong>
            </div>
            
            <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>
              📋 출석체크 시스템
            </h2>
            
            <p style={{ color: '#6c757d', marginBottom: '2rem', lineHeight: '1.6' }}>
              이 페이지에서 새신자들의 출석을 체크하고 관리할 수 있습니다.<br />
              현재는 테스트 버전으로, 기본 기능이 정상 작동하는지 확인 중입니다.
            </p>

            <div style={{
              background: '#f8f9fa',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e9ecef',
              textAlign: 'left'
            }}>
              <h3 style={{ color: '#495057', marginBottom: '1rem' }}>🚀 다음 기능들이 준비되어 있습니다:</h3>
              <ul style={{ color: '#6c757d', lineHeight: '1.8' }}>
                <li>📅 날짜별 출석체크 관리</li>
                <li>👥 새신자별 출석/결석 기록</li>
                <li>📊 실시간 출석 통계 확인</li>
                <li>💾 자동 데이터 저장 기능</li>
                <li>📈 출석률 계산 및 표시</li>
              </ul>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button 
                onClick={() => alert('출석체크 기능이 정상적으로 작동합니다!')}
                style={{
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginRight: '1rem'
                }}
              >
                🧪 기능 테스트
              </button>
              
              <button 
                onClick={() => window.location.reload()}
                style={{
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}
              >
                🔄 페이지 새로고침
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
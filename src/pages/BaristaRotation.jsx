import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BaristaRotation = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // 바리스타 팀원들 (A~J)
  const baristaMembers = [
    { name: '임동혁' },
    { name: 'Mary' },
    { name: '박병용' },
    { name: '이혜리' },
    { name: '박주용' },
    { name: '이은지' },
    { name: '임동혁' },
    { name: '최민희' },
    { name: '임동혁' },
    { name: '이소희' },
  ];

  // 5조 구성
  const teams = [
    { team: 1, members: [baristaMembers[0], baristaMembers[1]] }, // 임동혁, Mary
    { team: 2, members: [baristaMembers[2], baristaMembers[3]] }, // 박병용, 이혜리
    { team: 3, members: [baristaMembers[4], baristaMembers[5]] }, // 박주용, 이은지
    { team: 4, members: [baristaMembers[6], baristaMembers[7]] }, // 임동혁, 최민희
    { team: 5, members: [baristaMembers[8], baristaMembers[9]] }, // 임동혁, 이소희
  ];

  // 2025년 8월~12월 스케줄
  const schedule2025 = {
    '8': [
      { date: '8/3', week: 1, team: 1 },
      { date: '8/10', week: 2, team: 2 },
      { date: '8/17', week: 3, team: 3 },
      { date: '8/24', week: 4, team: 4 },
      { date: '8/31', week: 5, team: 5 },
    ],
    '9': [
      { date: '9/7', week: 1, team: 1 },
      { date: '9/14', week: 2, team: 2 },
      { date: '9/21', week: 3, team: 3 },
      { date: '9/28', week: 4, team: 4 },
    ],
    '10': [
      { date: '10/5', week: 1, team: 5 },
      { date: '10/12', week: 2, team: 1 },
      { date: '10/19', week: 3, team: 2 },
      { date: '10/26', week: 4, team: 3 },
    ],
    '11': [
      { date: '11/2', week: 1, team: 4 },
      { date: '11/9', week: 2, team: 5 },
      { date: '11/16', week: 3, team: 1 },
      { date: '11/23', week: 4, team: 2 },
      { date: '11/30', week: 5, team: 3 },
    ],
    '12': [
      { date: '12/7', week: 1, team: 4 },
      { date: '12/14', week: 2, team: 5 },
      { date: '12/21', week: 3, team: 1 },
      { date: '12/28', week: 4, team: 2 },
    ],
  };

  // 현재 주일 계산 (2025년 8월~12월 기준)
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    
    // 2025년 8월~12월이 아닌 경우 기본값 설정
    if (year !== 2025 || month < 8 || month > 12) {
      setCurrentWeek(4); // 이번 주는 4주차
      setSelectedYear(2025);
      setSelectedMonth(7); // 8월 (0-based index)
      return;
    }
    
    // 임시로 4주차로 설정 (실제 계산 대신)
    setCurrentWeek(4);
    setSelectedYear(year);
    setSelectedMonth(month - 1);
  }, []);



  // 현재 주일의 팀 정보 가져오기
  const getCurrentTeam = () => {
    const monthKey = (selectedMonth + 1).toString();
    const monthSchedule = schedule2025[monthKey];
    if (!monthSchedule) return null;
    
    const currentSchedule = monthSchedule.find(s => s.week === currentWeek);
    if (!currentSchedule) return null;
    
    return teams.find(t => t.team === currentSchedule.team);
  };

  // 선택된 월의 스케줄 가져오기
  const getSelectedMonthSchedule = () => {
    const monthKey = (selectedMonth + 1).toString();
    return schedule2025[monthKey] || [];
  };

  return (
    <div style={{
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#f5f7fa',
      minHeight: '100vh'
    }}>
      {/* 헤더 */}
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 2px 12px #0002'
      }}>
        <h1 style={{
          fontSize: '2rem',
          margin: '0 0 16px 0',
          color: '#1976d2'
        }}>
          바리스타 봉사 로테이션
        </h1>
        <p style={{ color: '#666', margin: 0 }}>
          2025년 8월~12월 청년부 주일 바리스타 봉사 일정과 담당자 정보를 확인하세요
        </p>
      </div>

      {/* 현재 주일 하이라이트 */}
      <div style={{
        background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        color: '#fff',
        boxShadow: '0 4px 20px #1976d240'
      }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '1.5rem' }}>
          이번 주 바리스타 봉사
        </h2>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>1번 바리스타</h3>
            <p style={{ margin: '0 0 4px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>
              {getCurrentTeam()?.members[0]?.name || '미정'}
            </p>
            <p style={{ margin: '0', opacity: 0.9 }}>
              이번 주 담당
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>2번 바리스타</h3>
            <p style={{ margin: '0 0 4px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>
              {getCurrentTeam()?.members[1]?.name || '미정'}
            </p>
            <p style={{ margin: '0', opacity: 0.9 }}>
              이번 주 담당
            </p>
          </div>
        </div>
      </div>

      {/* 월별 로테이션 테이블 */}
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 2px 12px #0002'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 style={{ margin: 0, color: '#333' }}>월별 로테이션 일정</h2>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '14px'
              }}
            >
              <option value={2025}>2025년</option>
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                fontSize: '14px'
              }}
            >
              <option value={7}>8월</option>
              <option value={8}>9월</option>
              <option value={9}>10월</option>
              <option value={10}>11월</option>
              <option value={11}>12월</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px'
          }}>
            <thead>
              <tr style={{
                background: '#f8f9fa',
                borderBottom: '2px solid #dee2e6'
              }}>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#495057'
                }}>주일</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#495057'
                }}>메인 바리스타</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#495057'
                }}>서브 바리스타</th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#495057'
                }}>연락처</th>
              </tr>
            </thead>
            <tbody>
              {getSelectedMonthSchedule().map((schedule, index) => {
                const team = teams.find(t => t.team === schedule.team);
                return (
                  <tr key={index} style={{
                    borderBottom: '1px solid #dee2e6',
                    background: currentWeek === schedule.week && selectedMonth === (new Date().getMonth()) ? '#e3f2fd' : 'transparent'
                  }}>
                    <td style={{
                      padding: '12px',
                      fontWeight: currentWeek === schedule.week && selectedMonth === (new Date().getMonth()) ? '600' : 'normal',
                      color: currentWeek === schedule.week && selectedMonth === (new Date().getMonth()) ? '#1976d2' : '#333'
                    }}>
                      {schedule.date} ({schedule.week}주차)
                    </td>
                                      <td style={{
                    padding: '12px',
                    fontWeight: currentWeek === schedule.week && selectedMonth === (new Date().getMonth()) ? '600' : 'normal'
                  }}>
                    {team?.members[0]?.name}
                  </td>
                  <td style={{
                    padding: '12px',
                    fontWeight: currentWeek === schedule.week && selectedMonth === (new Date().getMonth()) ? '600' : 'normal'
                  }}>
                    {team?.members[1]?.name}
                  </td>
                  <td style={{ padding: '12px' }}>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      <div>{schedule.team}조 담당</div>
                    </div>
                  </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 바리스타 팀원 목록 */}
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: '0 2px 12px #0002'
      }}>
        <h2 style={{ margin: '0 0 24px 0', color: '#333' }}>바리스타 팀 구성</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {teams.map((team, index) => (
            <div key={index} style={{
              padding: '20px',
              border: '2px solid #e0e0e0',
              borderRadius: '16px',
              background: '#fafafa'
            }}>
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '1.3rem',
                color: '#1976d2',
                textAlign: 'center'
              }}>
                {team.team}조
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {team.members.map((member, memberIndex) => (
                  <div key={memberIndex} style={{
                    padding: '12px',
                    background: '#fff',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0'
                  }}>
                                       <h4 style={{
                     margin: '0 0 4px 0',
                     fontSize: '1.1rem',
                     color: '#333'
                   }}>
                     {member.name}
                   </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 봉사 가이드 */}
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 2px 12px #0002'
      }}>
        <h2 style={{ margin: '0 0 16px 0', color: '#333' }}>봉사 가이드</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ margin: '0 0 12px 0', color: '#1976d2' }}>📅 봉사 시간</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#555' }}>
              <li>주일 오후 12:00 - 12:30</li>
              <li>설교 후 커피 서비스</li>
              <li>청년부 모임 후 정리</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 12px 0', color: '#1976d2' }}>☕ 주요 업무</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#555' }}>
              <li>커피 및 음료 준비</li>
              <li>청소 및 정리</li>
              <li>재료 관리</li>
              <li>팀원 간 소통</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 12px 0', color: '#1976d2' }}>🔄 로테이션 규칙</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#555' }}>
              <li>5조가 순환하며 봉사</li>
              <li>각 조는 2명으로 구성</li>
              <li>매주 1조씩 담당</li>
              <li>2025년 8월~12월 적용</li>
              <li>인원 출석 불가시 임동혁이 백업</li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: '0 0 12px 0', color: '#1976d2' }}>📞 연락처</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#555' }}>
       
              <li>카카오톡: 청년부 공지방</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 뒤로가기 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <Link to="/youth"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            background: '#1976d2',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600
          }}>
          청년부 메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default BaristaRotation;

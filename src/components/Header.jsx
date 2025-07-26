import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Header.module.css';
import MegaMenu from './MegaMenu';
import MegaMenuGroup from './MegaMenuGroup';
import MegaMenuWorship from './MegaMenuWorship';
import MegaMenuMission from './MegaMenuMission';
import MegaMenuWelcome from './MegaMenuWelcome';

/**
 * 헤더 컴포넌트 - 웹사이트의 상단 네비게이션 바
 * 로고, 메뉴 항목들, 모바일 햄버거 메뉴를 포함
 */
export default function Header() {
  // 환영합니다 메가메뉴 열림/닫힘 상태 관리
  const [welcomeMegaOpen, setWelcomeMegaOpen] = useState(false);
  // 소개합니다 메가메뉴 열림/닫힘 상태 관리
  const [introMegaOpen, setIntroMegaOpen] = useState(false);
  // 공동체와 양육 메가메뉴 열림/닫힘 상태 관리
  const [communityMegaOpen, setCommunityMegaOpen] = useState(false);
  // 예배와 말씀 메가메뉴 열림/닫힘 상태 관리
  const [worshipMegaOpen, setWorshipMegaOpen] = useState(false);
  // 선교와 사역 메가메뉴 열림/닫힘 상태 관리
  const [missionMegaOpen, setMissionMegaOpen] = useState(false);
  // 모바일 메뉴 열림/닫힘 상태 관리
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * 메가메뉴 외부 클릭 시 메뉴를 닫는 핸들러
   * @param {Event} e - 클릭 이벤트 객체
   */
  const handleClickOutside = (e) => {
    // 환영합니다 메뉴 영역을 클릭한 경우는 제외
    if (!e.target.closest('[data-mega-menu="welcome"]')) {
      setWelcomeMegaOpen(false);
    }
    // 소개합니다 메뉴 영역을 클릭한 경우는 제외
    if (!e.target.closest('[data-mega-menu="intro"]')) {
      setIntroMegaOpen(false);
    }
    // 공동체와 양육 메뉴 영역을 클릭한 경우는 제외
    if (!e.target.closest('[data-mega-menu="community"]')) {
      setCommunityMegaOpen(false);
    }
    if (!e.target.closest('[data-mega-menu="worship"]')) {
      setWorshipMegaOpen(false);
    }
    // 선교와 사역 메뉴 영역을 클릭한 경우는 제외
    if (!e.target.closest('[data-mega-menu="mission"]')) {
      setMissionMegaOpen(false);
    }
  };

  // 컴포넌트 마운트 시 클릭 이벤트 리스너 등록, 언마운트 시 제거
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /**
   * 모바일 햄버거 메뉴 토글 핸들러
   * 모바일 메뉴를 열 때는 모든 메가메뉴를 자동으로 닫음
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // 모바일 메뉴를 열 때는 모든 메가메뉴를 닫음
    if (!mobileMenuOpen) {
      setWelcomeMegaOpen(false);
      setIntroMegaOpen(false);
      setCommunityMegaOpen(false);
      setWorshipMegaOpen(false);
      setMissionMegaOpen(false);
    }
  };

  /**
   * '환영합니다' 메뉴 클릭 핸들러
   * 기본 링크 동작을 막고 환영합니다 메가메뉴를 토글
   * @param {Event} e - 클릭 이벤트 객체
   */
  const handleWelcomeClick = (e) => {
    e.preventDefault();
    setWelcomeMegaOpen(!welcomeMegaOpen);
    // 환영합니다 메뉴를 열 때는 다른 메뉴들을 닫음
    if (!welcomeMegaOpen) {
      setIntroMegaOpen(false);
      setCommunityMegaOpen(false);
      setWorshipMegaOpen(false);
      setMissionMegaOpen(false);
    }
  };

  /**
   * '소개합니다' 메뉴 클릭 핸들러
   * 기본 링크 동작을 막고 소개합니다 메가메뉴를 토글
   * @param {Event} e - 클릭 이벤트 객체
   */
  const handleIntroClick = (e) => {
    e.preventDefault();
    setIntroMegaOpen(!introMegaOpen);
    // 소개합니다 메뉴를 열 때는 다른 메뉴들을 닫음
    if (!introMegaOpen) {
      setCommunityMegaOpen(false);
      setWorshipMegaOpen(false);
      setMissionMegaOpen(false);
    }
  };

  /**
   * '공동체와 양육' 메뉴 클릭 핸들러
   * 기본 링크 동작을 막고 공동체와 양육 메가메뉴를 토글
   * @param {Event} e - 클릭 이벤트 객체
   */
  const handleCommunityClick = (e) => {
    e.preventDefault();
    setCommunityMegaOpen(!communityMegaOpen);
    // 공동체와 양육 메뉴를 열 때는 다른 메뉴들을 닫음
    if (!communityMegaOpen) {
      setIntroMegaOpen(false);
      setWorshipMegaOpen(false);
      setMissionMegaOpen(false);
    }
  };

  /**
   * '예배와 말씀' 메뉴 클릭 핸들러
   */
  const handleWorshipClick = (e) => {
    e.preventDefault();
    setWorshipMegaOpen(!worshipMegaOpen);
    if (!worshipMegaOpen) {
      setIntroMegaOpen(false);
      setCommunityMegaOpen(false);
      setMissionMegaOpen(false);
    }
  };

  /**
   * '선교와 사역' 메뉴 클릭 핸들러
   */
  const handleMissionClick = (e) => {
    e.preventDefault();
    setMissionMegaOpen(!missionMegaOpen);
    if (!missionMegaOpen) {
      setIntroMegaOpen(false);
      setCommunityMegaOpen(false);
      setWorshipMegaOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      {/* 로고 영역 */}
      <div className={styles.logoBox}>
        <a
          href="https://crystal-alpha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/crystal-logo2.png"
            alt="수정침례교회 로고"
            className={styles.logo}
          />
        </a>
      </div>

      {/* 햄버거 메뉴 버튼 - 모바일에서만 표시 */}
      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="메뉴 열기"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 네비게이션 메뉴 영역 */}
      <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
        {/* 환영합니다 메뉴 - 환영합니다 메가메뉴가 연결됨 */}
        <div
          style={{ position: 'relative', display: 'inline-block' }}
          data-mega-menu="welcome"
        >
          <a
            href="#"
            style={{ zIndex: 101, position: 'relative' }}
            data-mega-menu="welcome"
            onClick={handleWelcomeClick}
          >
            환영합니다
            <span className={styles.arrow}>
              <MdKeyboardArrowDown />
            </span>
          </a>
          {/* 환영합니다 메가메뉴 컴포넌트 */}
          <MegaMenuWelcome open={welcomeMegaOpen} closing={false} />
        </div>

        {/* 소개합니다 메뉴 - 소개합니다 메가메뉴가 연결됨 */}
        <div
          style={{ position: 'relative', display: 'inline-block' }}
          data-mega-menu="intro"
        >
          <a
            href="/intro#"
            style={{ zIndex: 101, position: 'relative' }}
            data-mega-menu="intro"
            onClick={handleIntroClick}
          >
            소개합니다
            <span className={styles.arrow}>
              <MdKeyboardArrowDown />
            </span>
          </a>
          {/* 소개합니다 메가메뉴 컴포넌트 */}
          <MegaMenu open={introMegaOpen} closing={false} />
        </div>

        {/* 예배와 말씀 메뉴 - 예배와 말씀 메가메뉴가 연결됨 */}
        <div
          style={{ position: 'relative', display: 'inline-block' }}
          data-mega-menu="worship"
        >
          <a
            href="#"
            style={{ zIndex: 101, position: 'relative' }}
            data-mega-menu="worship"
            onClick={handleWorshipClick}
          >
            예배와 말씀
            <span className={styles.arrow}>
              <MdKeyboardArrowDown />
            </span>
          </a>
          {/* 예배와 말씀 메가메뉴 컴포넌트 */}
          <MegaMenuWorship open={worshipMegaOpen} closing={false} />
        </div>

        {/* 공동체와 양육 메뉴 - 공동체와 양육 메가메뉴가 연결됨 */}
        <div
          style={{ position: 'relative', display: 'inline-block' }}
          data-mega-menu="community"
        >
          <a
            href="#"
            style={{ zIndex: 101, position: 'relative' }}
            data-mega-menu="community"
            onClick={handleCommunityClick}
          >
            공동체와 양육
            <span className={styles.arrow}>
              <MdKeyboardArrowDown />
            </span>
          </a>
          {/* 공동체와 양육 메가메뉴 컴포넌트 */}
          <MegaMenuGroup open={communityMegaOpen} closing={false} />
        </div>

        {/* 선교와 사역 메뉴 - 선교와 사역 메가메뉴가 연결됨 */}
        <div
          style={{ position: 'relative', display: 'inline-block' }}
          data-mega-menu="mission"
        >
          <a
            href="#"
            style={{ zIndex: 101, position: 'relative' }}
            data-mega-menu="mission"
            onClick={handleMissionClick}
          >
            선교와 사역
            <span className={styles.arrow}>
              <MdKeyboardArrowDown />
            </span>
          </a>
          {/* 선교와 사역 메가메뉴 컴포넌트 */}
          <MegaMenuMission open={missionMegaOpen} closing={false} />
        </div>
      </nav>
    </header>
  );
}

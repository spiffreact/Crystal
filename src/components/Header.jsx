import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Header.module.css';
import MegaMenu from './MegaMenu';
import MegaMenuGroup from './MegaMenuGroup';
import MegaMenuWorship from './MegaMenuWorship';

/**
 * 헤더 컴포넌트 - 웹사이트의 상단 네비게이션 바
 * 로고, 메뉴 항목들, 모바일 햄버거 메뉴를 포함
 */
export default function Header() {
  // 소개합니다 메가메뉴 열림/닫힘 상태 관리
  const [introMegaOpen, setIntroMegaOpen] = useState(false);
  // 공동체와 양육 메가메뉴 열림/닫힘 상태 관리
  const [communityMegaOpen, setCommunityMegaOpen] = useState(false);
  // 예배와 말씀 메가메뉴 열림/닫힘 상태 관리
  const [worshipMegaOpen, setWorshipMegaOpen] = useState(false);
  // 모바일 메뉴 열림/닫힘 상태 관리
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * 메가메뉴 외부 클릭 시 메뉴를 닫는 핸들러
   * @param {Event} e - 클릭 이벤트 객체
   */
  const handleClickOutside = (e) => {
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
      setIntroMegaOpen(false);
      setCommunityMegaOpen(false);
      setWorshipMegaOpen(false);
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
    // 소개합니다 메뉴를 열 때는 공동체와 양육 메뉴를 닫음
    if (!introMegaOpen) {
      setCommunityMegaOpen(false);
      setWorshipMegaOpen(false);
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
    // 공동체와 양육 메뉴를 열 때는 소개합니다 메뉴를 닫음
    if (!communityMegaOpen) {
      setIntroMegaOpen(false);
      setWorshipMegaOpen(false);
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
    }
  };

  return (
    <header className={styles.header}>
      {/* 로고 영역 */}
      <div className={styles.logoBox}>
        <img
          src="/crystal-logo2.png"
          alt="수정침례교회 로고"
          className={styles.logo}
        />
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
        {/* 환영합니다 메뉴 */}
        <a href="/" onClick={() => setMobileMenuOpen(false)}>
          환영합니다
          <span className={styles.arrow}>
            <MdKeyboardArrowDown />
          </span>
        </a>

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

        {/* 선교와 사역 메뉴 */}
        <a href="#" onClick={() => setMobileMenuOpen(false)}>
          선교와 사역
          <span className={styles.arrow}>
            <MdKeyboardArrowDown />
          </span>
        </a>
      </nav>
    </header>
  );
}

import React from 'react';
import styles from './OverseasOutreach.module.css';
import { Carousel } from '../components/ui/carousel';

// 해외 아웃리치 활동 이미지들
const outreachImages = [
  {
    src: '/tanzania1.jpeg',
    title: '2025 탄자니아 아웃리치',
    description: '아프리카 탄자니아 에서 진행된 복음 전도 활동'
  },
  {
    src: '/tanzania2.jpeg', 
    title: '2024 탄자니아 아웃리치',
    description: '각 지역별 공동체와 함께하는 선교 활동'
  },
  {
    src: '',
    title: '의료 선교 활동',
    description: '현지 주민들을 위한 의료 지원과 복음 전도'
  },
  {
    src: '',
    title: '교육 지원 사역',
    description: '아이들과 청소년을 위한 교육 프로그램 운영'
  },
  {
    src: '',
    title: '현지 교회 건축',
    description: '현지 교회 건축과 목회자 훈련 프로그램'
  }
];

// 해외 아웃리치 관련 유튜브 영상들
const outreachVideos = [
  {
    id: '',
    title: '2025 탄자니아 선교 영상',
    description: '수정교회 탄자니아 선교팀의 현지 활동 모습과 간증',
    date: '2025.07.20'
  },
  {
    id: '',
    title: '해외 아웃리치 간증',
    description: '선교 참가자들의 생생한 간증과 현지 주민들과의 만남',
    date: '2024.12.20'
  },
  {
    id: '',
    title: '선교 사역 보고',
    description: '2024년 해외 선교 사역 보고 및 향후 계획',
    date: '2024.11.10'
  },
  // {
  //   id: 'kJQP7kiw5Fk',
  //   title: '의료 선교 활동',
  //   description: '현지 의료진과 함께한 의료 선교 활동 영상',
  //   date: '2024.10.05'
  // },
  // {
  //   id: 'ZbZSe6N_BXs',
  //   title: '현지 교회 건축',
  //   description: '탄자니아 현지 교회 건축 과정과 헌당 예배',
  //   date: '2024.09.15'
  // },
  // {
  //   id: 'fJ9rUzIMcZQ',
  //   title: '아이들과의 만남',
  //   description: '현지 아이들과 함께한 교육 프로그램과 복음 전도',
  //   date: '2024.08.22'
  // }
];

/**
 * 해외 아웃리치 페이지 컴포넌트
 * 교회의 해외 선교 활동과 아웃리치 프로그램을 소개
 */
export default function OverseasOutreach() {
  return (
    <div className={styles.container}>
      {/* 페이지 헤더 */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1>해외 아웃리치</h1>
          <p>복음의 진리를 세계 곳곳에 전하는 수정교회의 해외 선교 사역</p>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          {/* 소개 섹션 */}
          <section className={styles.introSection}>
            <h2>해외 아웃리치 사역</h2>
            <p>
              수정침례교회는 하나님의 사랑과 복음을 세계 곳곳에 전하기 위해 
              다양한 해외 아웃리치 사역을 진행하고 있습니다. 
              우리의 선교 사역은 단순한 전도를 넘어서 현지 주민들의 실질적인 필요를 채우고, 
              지속가능한 공동체 발전을 위한 프로그램들을 포함합니다.
            </p>
          </section>

          {/* 주요 활동 섹션 */}
          <section className={styles.activitiesSection}>
            <h2>주요 활동</h2>
            <div className={styles.activitiesGrid}>
              <div className={styles.activityCard}>
                <h3>단기 선교</h3>
                <p>
                  매년 여름과 겨울 방학 기간을 이용하여 
                  아시아, 아프리카, 남미 등 다양한 지역에서 
                  1-2주간의 단기 선교 활동을 진행합니다.
                </p>
              </div>
  
              
              <div className={styles.activityCard}>
                <h3>교육 지원</h3>
                <p>
                  현지 아이들과 청소년들을 위한 교육 프로그램 지원, 
                  학용품 제공, 장학금 지원 등을 통해 
                  교육 환경 개선에 기여합니다.
                </p>
              </div>
              
              <div className={styles.activityCard}>
                <h3>현지 교회 지원</h3>
                <p>
                  현지 교회와의 파트너십을 통해 
                  교회 건축, 목회자 훈련, 신학 교육 등을 지원하여 
                  현지 교회의 성장을 돕습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 참여 방법 섹션 */}
          <section className={styles.participationSection}>
            <h2>참여 방법</h2>
            <div className={styles.participationContent}>
              <div className={styles.participationItem}>
                <h3>기도 후원</h3>
                <p>해외 선교사들과 현지 사역을 위한 지속적인 기도로 함께해 주세요.</p>
              </div>
              
              <div className={styles.participationItem}>
                <h3>물질 후원</h3>
                <p>선교 사역 진행과 현지 프로젝트를 위한 재정적 후원에 참여하실 수 있습니다.</p>
              </div>
              
              <div className={styles.participationItem}>
                <h3>직접 참여</h3>
                <p>단기 선교팀에 직접 참여하여 현지에서 복음을 전하고 사랑을 실천할 수 있습니다.</p>
              </div>
            </div>
          </section>

          {/* 아웃리치 활동 사진 캐러셀 섹션 */}
          <section className={styles.gallerySection}>
            <h2>아웃리치 활동</h2>
            <p className={styles.galleryDescription}>
              2019년부터 현재까지 진행된 수정교회의 해외 아웃리치 활동 모습입니다.
            </p>
            <div className={styles.carouselContainer}>
              <Carousel>
                {outreachImages.map((image, idx) => (
                  <div
                    key={idx}
                    className={styles.carouselSlide}
                    style={{
                      backgroundImage: `url(${image.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className={styles.slideOverlay}>
                      <div className={styles.slideContent}>
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </section>

          {/* 유튜브 영상 섹션 */}
          <section className={styles.videosSection}>
            <h2>선교 영상</h2>
            <p className={styles.videosDescription}>
              해외 아웃리치 활동의 생생한 현장과 간증을 영상으로 만나보세요.
            </p>
            <div className={styles.videosGrid}>
              {outreachVideos.map((video, idx) => (
                <div key={idx} className={styles.videoCard}>
                  <div className={styles.videoThumbnail}>
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                    />
                    <div className={styles.playButton}>
                      <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className={styles.videoInfo}>
                    <h3>{video.title}</h3>
                    <p className={styles.videoDescription}>{video.description}</p>
                    <div className={styles.videoDate}>{video.date}</div>
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.watchButton}
                    >
                      영상 보기
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 연락처 섹션 */}
          <section className={styles.contactSection}>
            <h2>문의 및 신청</h2>
            <div className={styles.contactInfo}>
              <p>해외 아웃리치 사역에 관심이 있으시거나 참여를 원하시는 분은 아래로 연락해 주세요.</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <strong>담당자:</strong> 선교부
                </div>
                <div className={styles.contactItem}>
                  <strong>연락처:</strong> 교회 사무실 (031-212-0091)
                </div>
                <div className={styles.contactItem}>
                  <strong>이메일:</strong> suwoncrystalchurch@gmail.com 
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 
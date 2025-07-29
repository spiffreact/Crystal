import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainBanner from '../components/MainBanner';
import QuickLinks from '../components/QuickLinks';
import SectionCard from '../components/SectionCard';

function Home() {
  return (
    <>
      <Helmet>
        <title>수정침례교회 - 예수님의 사랑을 실천하는 교회</title>
        <meta name="description" content="수정침례교회는 1991년 창립된 경기도 수원시 팔달구에 위치한 교회입니다. 주일예배 오전 11시, 수요예배, 금요기도회, 새벽기도회를 통해 하나님의 말씀을 전하고 있습니다." />
        <meta name="keywords" content="수정침례교회, 수원교회, 침례교회, 기독교, 예배, 설교, 김광호목사, 수원시교회" />
        <link rel="canonical" href="https://crystal-alpha.vercel.app/" />
      </Helmet>
      <main>
        <MainBanner />
        <QuickLinks />
        <section className="sections">
          <SectionCard
            title="예배 안내"
            description="매주 주일 오전 11시에 예배를 드립니다."
            linkText="예배 안내 보기"
          />
          <SectionCard
            title="교회 소개"
            description="수정침례교회는 하나님의 사랑을 전하는 교회입니다."
            linkText={<Link to="/intro" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '500' }}>교회 소개 보기</Link>}
          />
          <SectionCard
            title="연락처"
            description="궁금한 점이 있으시면 언제든 연락해 주세요."
            linkText={
              <a 
                href="#phone-number" 
                onClick={(e) => {
                  e.preventDefault();
                  const phoneNumber = document.getElementById('phone-number');
                  if (phoneNumber) {
                    phoneNumber.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }
                }}
                style={{ color: '#3498db', textDecoration: 'none', fontWeight: '500' }}
              >
                연락처 보기
              </a>
            }
          />
        </section>
      </main>
    </>
  );
}

export default Home;

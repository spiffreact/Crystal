import { Link } from 'react-router-dom';
import MainBanner from '../components/MainBanner';
import QuickLinks from '../components/QuickLinks';
import SectionCard from '../components/SectionCard';

function Home() {
  return (
    <main>
      <MainBanner />
      <QuickLinks />
      <section className="sections">
        <SectionCard
          title="예배 안내"
          description="매주 일요일 오전 11시에 예배를 드립니다."
          linkText="예배 안내 보기"
        />
        <SectionCard
          title="교회 소개"
          description="수정침례교회는 하나님의 사랑을 전하는 교회입니다."
          linkText={<Link to="/intro">교회 소개 보기</Link>}
        />
        <SectionCard
          title="연락처"
          description="궁금한 점이 있으시면 언제든 연락해 주세요."
          linkText="연락처 보기"
        />
      </section>
    </main>
  );
}

export default Home;

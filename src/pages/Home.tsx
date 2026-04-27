import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, Key } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              旅から戻れば、<br />
              <span className="text-yellow">新車のような輝き。</span>
            </h1>
            <p className="hero-subtitle">
              関西国際空港 駐車場専用 無水洗車サービス<br />
              あなたが空の旅を楽しんでいる間に、プロが丁寧に磨き上げます。
            </p>
            <div className="hero-btns">
              <Link to="/reservation" className="btn-primary hero-btn">
                今すぐ予約する <ArrowRight size={20} />
              </Link>
              <Link to="/service" className="btn-outline hero-btn">
                サービスを詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="features section-padding">
        <div className="container">
          <h2 className="section-title">X car wash が選ばれる理由</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <Clock className="feature-icon" size={40} />
              <h3>待ち時間ゼロ</h3>
              <p>旅行や出張の出発前に車を停めるだけ。帰国時にはピカピカの愛車がお出迎えします。</p>
            </div>
            <div className="feature-card">
              <Shield className="feature-icon" size={40} />
              <h3>傷をつけない特殊洗浄</h3>
              <p>独自開発の液剤を使用。水を一切使わず、手洗い以上に優しく汚れを浮かせます。</p>
            </div>
            <div className="feature-card">
              <CheckCircle className="feature-icon" size={40} />
              <h3>空港公認（予定）の安心感</h3>
              <p>駐車場内での作業許可を得たプロのスタッフが、責任を持って作業いたします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* レンタカー誘導セクション */}
      <section className="rental-banner section-padding">
        <div className="container">
          <div className="rental-banner-content">
            <div className="rental-banner-text">
              <h2>格安レンタカーも提供中</h2>
              <p>24時間2,000円〜の地域最安値クラス！<br />旅行やビジネスに、安心・安全な X RENTACAR をぜひご利用ください。</p>
              <Link to="/rental" className="btn-primary">
                レンタカーの詳細を見る <ArrowRight size={20} />
              </Link>
            </div>
            <div className="rental-banner-image">
              <Key size={80} color="#001a3d" opacity={0.2} />
            </div>
          </div>
        </div>
      </section>

      {/* フローセクション */}
      <section className="flow section-padding bg-navy">
        <div className="container">
          <h2 className="section-title text-light">ご利用の流れ</h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-num">01</div>
              <h4 className="text-yellow">ネットで予約</h4>
              <p className="text-light">予約フォームから日程と車種、駐車場所を選択。</p>
            </div>
            <div className="flow-step">
              <div className="step-num">02</div>
              <h4 className="text-yellow">空港に駐車</h4>
              <p className="text-light">通常通り関空の駐車場へ。そのまま出発！</p>
            </div>
            <div className="flow-step">
              <div className="step-num">03</div>
              <h4 className="text-yellow">プロの洗車</h4>
              <p className="text-light">ご不在の間に、私たちが真心込めて洗車します。</p>
            </div>
            <div className="flow-step">
              <div className="step-num">04</div>
              <h4 className="text-yellow">綺麗な車で帰宅</h4>
              <p className="text-light">到着後、輝く車に乗ってそのまま帰宅いただけます。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

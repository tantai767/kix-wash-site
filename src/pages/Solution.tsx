import { Link } from 'react-router-dom';
import { Car, Droplets } from 'lucide-react';
import './Solution.css';

const Solution = () => {
  return (
    <div className="solution-page">
      <section className="solution-hero">
        <div className="container">
          <h1>無水洗車専用の溶剤</h1>
          <p>愛車を傷つけず、環境にも優しい次世代の洗浄テクノロジー</p>
        </div>
      </section>

      <section className="solution-content section-padding">
        <div className="container">
          <div className="content-box">
            <Droplets className="icon-large" size={60} />
            <h2>独自開発の特殊溶剤</h2>
            <p>
              私たちの使用する溶剤は、汚れを包み込み、浮かせ、そして保護膜を形成する3つのプロセスを同時に行います。
              <br />
              砂埃や泥汚れが塗装面に直接触れるのを防ぐため、水をたっぷり使った洗車よりも傷がつきにくいのが特徴です。
            </p>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <h3>1. 汚れを包み込む「カプセル化」</h3>
              <p>溶剤が汚れの粒子をナノレベルで包み込み、塗装面から安全に引き離します。</p>
            </div>
            <div className="feature-item">
              <h3>2. 深みのある輝き</h3>
              <p>最高級のカルナバワックス成分を配合。拭き上げと同時にコーティングが完了します。</p>
            </div>
            <div className="feature-item">
              <h3>3. 環境への配慮</h3>
              <p>生分解性の成分を使用しており、排水も出ないため地球環境に負荷をかけません。</p>
            </div>
          </div>

          <div className="cta-section">
            <Link to="/service" className="btn-primary">洗車内容を詳しく見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;

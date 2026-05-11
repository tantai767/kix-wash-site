import { Check, Droplet, Sparkles, Leaf, ArrowRight, Shield, Zap, Globe, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Service.css';
import './Home.css';

const Service = () => {
  return (
    <div className="service-page">
      <section className="page-header">
        <div className="container">
          <h1>洗車内容</h1>
          <p>X Car Wash が提供する次世代の洗車体験</p>
        </div>
      </section>

      <section className="service-detail section-padding">
        <div className="container grid-2">
          <div className="service-image">
            <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000" alt="洗車イメージ" />
          </div>
          <div className="service-text">
            <h2>水を一切使わない、<br /><span className="text-navy">「無水洗車」のテクノロジー</span></h2>
            <p>
              私たちの洗車は、バケツ一杯の水も使いません。
              天然成分100%の独自開発された洗浄剤が汚れを包み込み、浮かせた状態で専用の高密度クロスで優しく拭き取ります。
            </p>
            <ul className="benefit-list">
              <li><Check className="text-yellow" /> <strong>傷がつかない:</strong> 汚れを粒子レベルで包み込み、繊維の奥にキャッチするため摩擦を最小限に抑えます。</li>
              <li><Check className="text-yellow" /> <strong>環境に優しい:</strong> 汚水排水ゼロ。コップ1杯程度の水（クロスの湿潤用）のみを使用します。</li>
              <li><Check className="text-yellow" /> <strong>圧倒的な艶:</strong> 天然成分のワックスにより、洗うたびに深みのある艶が増し、汚れが付きにくくなります。</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="merits section-padding bg-gray">
        <div className="container">
          <h2 className="section-title">空港駐車場だからこそのメリット</h2>
          <div className="merit-grid">
            <div className="merit-card">
              <Droplet size={48} className="merit-icon" />
              <h3>場所を選ばない</h3>
              <p>排水設備が不要なため、駐車場に停めたその場所で作業が可能です。お車を動かす必要はありません。</p>
            </div>
            <div className="merit-card">
              <Sparkles size={48} className="merit-icon" />
              <h3>帰宅時の満足感</h3>
              <p>長旅の疲れを癒やすのは、ピカピカの愛車。そのまま気持ちよくお帰りいただけます。</p>
            </div>
            <div className="merit-card">
              <Leaf size={48} className="merit-icon" />
              <h3>待ち時間ゼロ</h3>
              <p>ご旅行や出張の出発前に預けるだけ。到着時にはプロが磨き上げた車がお迎えします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 次のページへのリンク */}
      <section className="cta-section section-padding text-center">
        <div className="container">
          <p className="mb-4">私たちのこだわりを、もっと詳しく</p>
          <Link to="/washing-flow" className="btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            洗車の流れを見る <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* レンタカー誘導セクション */}
      <section className="rental-banner section-padding bg-gray">
        <div className="container">
          <div className="rental-banner-content">
            <div className="rental-banner-text">
              <h2>格安レンタカーも提供中</h2>
              <p>24時間2,000円〜の地域最安値クラス！<br />旅行やビジネスに、安心・安全な X RENTACAR をぜひご利用ください。</p>
              <Link to="/rental" className="btn-primary">
                レンタカーの詳細を見る <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;

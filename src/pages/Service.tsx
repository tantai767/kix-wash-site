import { Check, Droplet, Sparkles, Leaf } from 'lucide-react';
import './Service.css';

const Service = () => {
  return (
    <div className="service-page">
      <section className="page-header">
        <div className="container">
          <h1>サービス紹介</h1>
          <p>KIX Waterless Wash が提供する次世代の洗車体験</p>
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
              独自開発された高分子洗浄剤が汚れを包み込み、浮かせた状態で専用のマイクロファイバークロスで優しく拭き取ります。
            </p>
            <ul className="benefit-list">
              <li><Check className="text-yellow" /> <strong>傷がつかない:</strong> 汚れを粒子レベルで包み込むため、摩擦を最小限に抑えます。</li>
              <li><Check className="text-yellow" /> <strong>環境に優しい:</strong> 排水を出さないため、空港の環境を汚しません。</li>
              <li><Check className="text-yellow" /> <strong>持続する輝き:</strong> 洗浄と同時に高級ワックスコーティングを施します。</li>
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
              <h3>エコフレンドリー</h3>
              <p>1回の洗車で節約できる水は約200リットル。地球に優しい選択です。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;

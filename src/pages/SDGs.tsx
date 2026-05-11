import { Globe, Recycle, Leaf, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Service.css'; // 再利用可能なスタイル
import './Home.css';

const SDGs = () => {
  return (
    <div className="sdgs-page">
      <section className="page-header">
        <div className="container">
          <h1>SDGsへの取り組み</h1>
          <p>持続可能な社会の実現に貢献する無水洗車サービス</p>
        </div>
      </section>

      <section className="sdgs-detail section-padding">
        <div className="container">
          <div className="sdgs-intro text-center mb-5">
            <h2>私たちの無水洗車は、<br />17の目標のうち<span className="text-navy">10の目標</span>に該当します。</h2>
            <p className="mt-3">
              EasyEcoWaxを使用した無水洗車は、単なる洗車サービスではなく、<br />
              地球環境と未来を守るためのエコロジーな選択です。
            </p>
          </div>

          <div className="sdgs-grid">
            <div className="sdgs-item">
              <div className="sdgs-icon-wrapper">
                <Globe className="sdgs-icon text-yellow" size={40} />
              </div>
              <div className="sdgs-content">
                <h3>環境負荷の低減（目標6・14・15）</h3>
                <p>1台あたり約50〜100リットルの節水を実現。汚水排水を一切出さないため、河川や海洋、そして陸上の生態系を汚染から守ります。</p>
                <ul className="benefit-list mt-3">
                  <li><Check size={18} className="text-yellow" /> 節水効果：1台あたり約50〜100L</li>
                  <li><Check size={18} className="text-yellow" /> 排水：汚水排水ゼロ</li>
                </ul>
              </div>
            </div>

            <div className="sdgs-item">
              <div className="sdgs-icon-wrapper">
                <Recycle className="sdgs-icon text-yellow" size={40} />
              </div>
              <div className="sdgs-content">
                <h3>持続可能な生産と消費（目標12）</h3>
                <p>天然成分100%のエコロジーな溶剤を使用しています。有害な化学物質を含まないことで、安全で持続可能な消費活動を促進します。</p>
                <ul className="benefit-list mt-3">
                  <li><Check size={18} className="text-yellow" /> 成分：天然成分100%（カルナバワックス・天然粘土）</li>
                  <li><Check size={18} className="text-yellow" /> 安全性：人体や環境への悪影響なし</li>
                </ul>
              </div>
            </div>

            <div className="sdgs-item">
              <div className="sdgs-icon-wrapper">
                <Leaf className="sdgs-icon text-yellow" size={40} />
              </div>
              <div className="sdgs-content">
                <h3>気候変動への対応（目標7・13）</h3>
                <p>機械を一切使用しない完全手洗い施工です。電力消費を抑え、Co2排出を極限まで削減したクリーンなサービスを提供します。</p>
                <ul className="benefit-list mt-3">
                  <li><Check size={18} className="text-yellow" /> 施工方法：完全手洗い（電力不要）</li>
                  <li><Check size={18} className="text-yellow" /> 排出：Co2排出削減</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sdgs-targets bg-navy text-light p-5 mt-5 border-radius-12">
            <h3 className="text-center text-yellow mb-4">該当する主な目標</h3>
            <div className="targets-grid">
              <div className="target-card"><strong>③ 保健</strong>：有害化学物質による汚染減少</div>
              <div className="target-card"><strong>⑥ 水・衛生</strong>：汚染の低減、節水</div>
              <div className="target-card"><strong>⑦ エネルギー</strong>：クリーンなエネルギー利用</div>
              <div className="target-card"><strong>⑧ 成長・雇用</strong>：環境を守り持続可能経済を</div>
              <div className="target-card"><strong>⑨ イノベーション</strong>：新しい無水技術の活用</div>
              <div className="target-card"><strong>⑫ 生産・消費</strong>：廃棄物削減と環境配慮</div>
              <div className="target-card"><strong>⑬ 気候変動</strong>：Co2削減と環境保全</div>
              <div className="target-card"><strong>⑭ 海洋資源</strong>：海洋汚染の防止</div>
              <div className="target-card"><strong>⑮ 陸上資源</strong>：陸上生態系の保護</div>
              <div className="target-card"><strong>⑰ 実施手段</strong>：パートナーシップによる推進</div>
            </div>
          </div>

          <div className="cta-section text-center" style={{marginTop: '40px'}}>
            <p className="mb-4">環境に優しい洗車で、あなたの愛車も地球も美しく。</p>
            <Link to="/reservation" className="btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
              今すぐネット予約する <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDGs;

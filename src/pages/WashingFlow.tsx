import { Droplet, Sparkles, Shield, Zap, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Service.css';
import './Home.css';

const WashingFlow = () => {
  return (
    <div className="washing-flow-page">
      <section className="page-header">
        <div className="container">
          <h1>洗車の流れ</h1>
          <p>プロの技術で一台一台、丁寧に磨き上げます</p>
        </div>
      </section>

      <section className="washing-flow-detail section-padding">
        <div className="container">
          <div className="section-intro text-center mb-5">
            <h2>独自の4ステップ・プロフェッショナル施工</h2>
            <p className="mt-3">
              クイックウォッシュの洗車は、単に汚れを落とすだけではありません。<br />
              お車へのダメージを最小限に抑え、手洗いならではの細やかな気配りで、新車のような輝きを取り戻します。
            </p>
          </div>

          <div className="flow-steps-detailed">
            {/* STEP 01 */}
            <div className="flow-detail-item bg-gray p-5 border-radius-12 mb-5">
              <div className="grid-2">
                <div className="flow-detail-content">
                  <span className="step-label text-navy">STEP 01</span>
                  <h3 className="text-navy mt-2">足回りから徹底洗浄</h3>
                  <p className="mt-4">
                    洗車の基本は足回りから。最も汚れが激しく、砂や泥が溜まりやすいホイール、タイヤハウス、タイヤを専用の溶剤で洗浄します。
                  </p>
                  <ul className="benefit-list mt-4">
                    <li><Check size={18} className="text-yellow" /> <strong>専用クロスの使用:</strong> ボディ用とは厳格に区別した足回り専用のクロスを使用し、キズの原因となる汚れの引きずりを防ぎます。</li>
                    <li><Check size={18} className="text-yellow" /> <strong>ブレーキダスト除去:</strong> こびりついたブレーキダストも、特殊溶剤の力で浮かせて安全に取り除きます。</li>
                  </ul>
                </div>
                <div className="flow-detail-icon text-center">
                  <Droplet size={120} className="text-navy opacity-2" />
                </div>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="flow-detail-item bg-navy text-light p-5 border-radius-12 mb-5">
              <div className="grid-2">
                <div className="flow-detail-icon text-center order-mobile-2">
                  <Sparkles size={120} className="text-yellow opacity-2" />
                </div>
                <div className="flow-detail-content">
                  <span className="step-label text-yellow">STEP 02</span>
                  <h3 className="text-yellow mt-2">ボディの「浮かせ取り」洗浄</h3>
                  <p className="mt-4">
                    ボディ全体に特殊溶剤をミスト状に噴霧。汚れを粒子レベルで包み込んで浮かせ、高密度のマイクロファイバークロスで優しく吸着します。
                  </p>
                  <ul className="benefit-list mt-4">
                    <li><Check size={18} className="text-yellow" /> <strong>ダメージレス技術:</strong> 塗装面を擦るのではなく、汚れを「吸い取る」ように拭き上げるため、洗車傷の心配がありません。</li>
                    <li><Check size={18} className="text-yellow" /> <strong>常に清潔な面を使用:</strong> クロスの一拭きごとに面を変え、常に綺麗な面で作業することで汚れを広げません。</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="flow-detail-item bg-gray p-5 border-radius-12 mb-5">
              <div className="grid-2">
                <div className="flow-detail-content">
                  <span className="step-label text-navy">STEP 03</span>
                  <h3 className="text-navy mt-2">ディテール・フィニッシュ</h3>
                  <p className="mt-4">
                    洗車機では絶対に届かない、手洗いだからこそできる精密な仕上げ工程です。プロの視点で、わずかな汚れも見逃しません。
                  </p>
                  <ul className="benefit-list mt-4">
                    <li><Check size={18} className="text-yellow" /> <strong>細部清掃:</strong> エンブレムの隙間、ドアノブ、サイドミラーの付け根など、細かな箇所を手作業で清掃します。</li>
                    <li><Check size={18} className="text-yellow" /> <strong>ドアの内側:</strong> 意外と汚れが溜まりやすいドアを開けた内側のステップ部分も丁寧に拭き上げます。</li>
                  </ul>
                </div>
                <div className="flow-detail-icon text-center">
                  <Shield size={120} className="text-navy opacity-2" />
                </div>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="flow-detail-item bg-navy text-light p-5 border-radius-12">
              <div className="grid-2">
                <div className="flow-detail-icon text-center order-mobile-2">
                  <Zap size={120} className="text-yellow opacity-2" />
                </div>
                <div className="flow-detail-content">
                  <span className="step-label text-yellow">STEP 04</span>
                  <h3 className="text-yellow mt-2">タイヤワックス ＆ 最終検品</h3>
                  <p className="mt-4">
                    最後の仕上げに、タイヤに専用ワックスを塗布し、足元に艶やかな黒さを取り戻します。最後に全体の仕上がりを厳格にチェックします。
                  </p>
                  <ul className="benefit-list mt-4">
                    <li><Check size={18} className="text-yellow" /> <strong>品質保証:</strong> 拭き残しやムラがないか、多角的な照明と視点で徹底的に検品を行います。</li>
                    <li><Check size={18} className="text-yellow" /> <strong>感動の対面へ:</strong> お客様が戻られた際に「新車のような輝き」を実感いただけるよう、完璧な状態に仕上げます。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 次のページへのリンク */}
      <section className="next-page-link section-padding text-center">
        <div className="container">
          <p className="mb-3">輝きを支える、こだわりの溶剤</p>
          <Link to="/solution" className="btn-outline">
            無水洗車専用の溶剤を見る <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="tech-commitment section-padding">
        <div className="container">
          <h2 className="section-title text-center">こだわりの洗車技術</h2>
          <div className="merit-grid">
            <div className="merit-card">
              <Droplet className="merit-icon" size={48} />
              <h3>少しの水でピッカピカ</h3>
              <p>1台あたりの使用水量はわずかコップ1杯分程度。排水を出さず、環境への配慮と驚きの洗浄力を両立させています。</p>
            </div>
            <div className="merit-card">
              <Sparkles className="merit-icon" size={48} />
              <h3>クロスの使い分け</h3>
              <p>ボディ用、足回り用、仕上げ用など、部位ごとに最適なマイクロファイバークロスを使い分け、最高の仕上がりを追求します。</p>
            </div>
            <div className="merit-card">
              <Shield className="merit-icon" size={48} />
              <h3>場所を選ばない施工</h3>
              <p>排水が出ないため、駐車場を汚さず、お車を動かす必要もありません。停めたその場所が、最高の洗車スペースに変わります。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WashingFlow;

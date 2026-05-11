import { Link } from 'react-router-dom';
import { Droplets, ShieldCheck, Leaf, Sparkles, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import './Solution.css';
import './Service.css';

const Solution = () => {
  return (
    <div className="solution-page">
      <section className="page-header">
        <div className="container">
          <h1>無水洗車専用の溶剤「EasyEcoWax」</h1>
          <p>天然成分100%が生み出す、圧倒的な輝きと保護性能</p>
        </div>
      </section>

      <section className="solution-intro section-padding">
        <div className="container grid-2">
          <div className="solution-text">
            <h2>量販店の市販品とは、<br /><span className="text-navy">成分の中身が違います。</span></h2>
            <p>
              私たちの使用する「EasyEcoWax」は、石油系成分や界面活性剤を一切含まない、完全天然成分100%のオリジナルブランド溶剤です。
              <br /><br />
              主成分である最高級カルナバワックスと天然粘土（クレイ）が、塗装面に負担をかけることなく汚れを落とし、同時に深い艶を与えます。
            </p>
            <div className="ingredient-tags mt-4">
              <span className="tag">天然成分100%</span>
              <span className="tag">石油系成分ゼロ</span>
              <span className="tag">研磨剤不使用</span>
              <span className="tag">生分解性</span>
            </div>
          </div>
          <div className="solution-image bg-gray p-5 border-radius-12 text-center">
            <Droplets size={120} className="text-navy mb-4" />
            <h3 className="text-navy">EasyEcoWax</h3>
            <p className="text-muted">Original Eco-Friendly Solution</p>
          </div>
        </div>
      </section>

      <section className="mechanism section-padding bg-navy text-light">
        <div className="container">
          <h2 className="section-title text-light">ダメージレスのメカニズム</h2>
          <div className="mechanism-steps">
            <div className="mech-step">
              <div className="step-num">01</div>
              <h4>吸着・軟化</h4>
              <p>天然成分の溶剤が汚れに吸着。塗装面（コーティング面）から汚れを引き剥がし、柔らかくします。</p>
            </div>
            <div className="mech-step">
              <div className="step-num">02</div>
              <h4>カプセル化</h4>
              <p>浮き上がった汚れを、溶剤が粒子レベルで包み込みます。これにより、塗装面を擦っても傷がつきません。</p>
            </div>
            <div className="mech-step">
              <div className="step-num">03</div>
              <h4>吸い取り</h4>
              <p>高密度（360g/㎡）の専用クロスの繊維の奥へ、包み込んだ汚れを逃さずキャッチします。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison section-padding">
        <div className="container">
          <h2 className="section-title">他社類似品との比較</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th className="highlight">EasyEcoWax</th>
                  <th>量販店販売商品A</th>
                  <th>量販店販売商品B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>主成分</td>
                  <td>カルナバ・天然粘土</td>
                  <td>高光沢ワックス</td>
                  <td>ポリシロキサン</td>
                </tr>
                <tr>
                  <td>成分構成</td>
                  <td>天然成分100%</td>
                  <td>界面活性剤配合</td>
                  <td>石油系成分配合</td>
                </tr>
                <tr>
                  <td>肌への影響</td>
                  <td>特になし（手に優しい）</td>
                  <td>刺激がある場合あり</td>
                  <td>皮脂を落としすぎる</td>
                </tr>
                <tr>
                  <td>塗装への影響</td>
                  <td>保護・艶出し</td>
                  <td>化学成分による刺激</td>
                  <td>コーティングを剥がす恐れ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="solution-features section-padding bg-gray">
        <div className="container">
          <h2 className="section-title">溶剤の4つの特徴</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <ShieldCheck className="feature-icon" size={40} />
              <h3>コーティング施工車に最適</h3>
              <p>研磨剤（コンパウンド）が含まれていないため、新車のコーティングを傷めることなく、汚れだけを落とせます。</p>
            </div>
            <div className="feature-card">
              <Sparkles className="feature-icon" size={40} />
              <h3>洗うたびに増す輝き</h3>
              <p>カルナバワックスの被膜が重なることで、深い艶が生まれ、次第に汚れが付きにくいボディへと変わります。</p>
            </div>
            <div className="feature-card">
              <Leaf className="feature-icon" size={40} />
              <h3>SDGsに合致</h3>
              <p>ほぼ水を使用せず（1台300ml程度）、汚水も出さない。地球の未来に配慮したエコロジーな溶剤です。</p>
            </div>
            <div className="feature-card">
              <CheckCircle className="feature-icon" size={40} />
              <h3>豊富な実績</h3>
              <p>2013年からの導入実績で、9,000台以上の洗車を実施。洗車傷によるクレームは一度もありません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 次のページへのリンク */}
      <section className="cta-section section-padding text-center">
        <div className="container">
          <p className="mb-4">地球の未来のために、私たちができること</p>
          <Link to="/sdgs" className="btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            SDGsへの取り組みを見る <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solution;


import './Pricing.css';

const Pricing = () => {
  const prices = [
    { size: 'S', example: 'N-BOX, ヴィッツ 等', price: '3,300' },
    { size: 'M', example: 'プリウス, カローラ 等', price: '3,850' },
    { size: 'L', example: 'クラウン, セレナ 等', price: '4,400' },
    { size: 'LL', example: 'アルファード, ランドクルーザー 等', price: '5,500' },
  ];

  return (
    <div className="pricing-page">
      <section className="page-header">
        <div className="container">
          <h1>料金表</h1>
          <p>シンプルで分かりやすいサイズ別定額制</p>
        </div>
      </section>

      <section className="pricing-table section-padding">
        <div className="container">
          <div className="table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>サイズ</th>
                  <th>代表車種例</th>
                  <th>税込料金 (通常コース)</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item) => (
                  <tr key={item.size}>
                    <td className="size-label">{item.size}サイズ</td>
                    <td>{item.example}</td>
                    <td className="price-val">¥{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="options section-padding">
            <h2 className="section-title">オプションメニュー</h2>
            <div className="option-grid">
              <div className="option-item">
                <h3>超撥水コーティング</h3>
                <p>雨を強力に弾き、汚れの付着を防ぎます。</p>
                <span className="option-price">+¥1,100〜</span>
              </div>
              <div className="option-item">
                <h3>ホイールクリーニング</h3>
                <p>ブレーキダスト等の頑固な汚れを徹底除去。</p>
                <span className="option-price">+¥550〜</span>
              </div>
              <div className="option-item">
                <h3>フロントガラス油膜取り</h3>
                <p>雨の日の視界を劇的に改善します。</p>
                <span className="option-price">+¥1,650〜</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

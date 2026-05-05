import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import './Pricing.css';
import './Rental.css';

const RentalPricing = () => {
  const prices = [
    { class: 'A-1 (軽自動車 2ドア等)', duration24h: '2,000', weekly: '7,800', monthly: '24,800' },
    { class: 'A-2 (軽自動車 4ドア等)', duration24h: '2,500', weekly: '9,800', monthly: '29,800' },
    { class: 'B-1 (コンパクトカー等)', duration24h: '3,000', weekly: '12,000', monthly: '39,000' },
  ];

  return (
    <div className="pricing-page">
      <section className="page-header" style={{backgroundColor: '#003366'}}>
        <div className="container">
          <h1>レンタカー料金表</h1>
          <p>地域最安値クラスの格安プランをご用意しております</p>
        </div>
      </section>

      <section className="pricing-table section-padding">
        <div className="container">
          <div className="table-wrapper">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>クラス・車種例</th>
                  <th>24時間</th>
                  <th>1週間</th>
                  <th>1ヶ月</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item, idx) => (
                  <tr key={idx}>
                    <td className="size-label">{item.class}</td>
                    <td className="price-val">¥{item.duration24h}</td>
                    <td className="price-val">¥{item.weekly}</td>
                    <td className="price-val">¥{item.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{marginTop: '20px', color: '#666', textAlign: 'center'}}>※上記料金は消費税、保険料込みの価格です。</p>

          <div style={{marginTop: '50px', textAlign: 'center'}}>
            <a 
              href="https://guts-rentacar.com/shop/osaka/rinkuizumisano/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 40px', fontSize: '1.2rem'}}
            >
              空車確認・ご予約はこちら <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalPricing;

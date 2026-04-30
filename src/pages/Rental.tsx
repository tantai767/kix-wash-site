import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import './Rental.css';

const Rental = () => {
  return (
    <div className="rental-page">
      <section className="rental-hero">
        <div className="container">
          <h1>格安レンタカーサービス</h1>
          <p className="rental-intro">
            X RENTACAR（エックスレンタカー） りんくう泉佐野店では、<br />
            地域最安値クラスの格安レンタカーをご提供いたします。
          </p>
        </div>
      </section>

      <section className="price-section">
        <div className="container">
          <h2 className="section-title">格安料金プラン</h2>
          <div className="price-grid">
            <div className="price-card">
              <div className="price-header">
                <h3>24時間</h3>
              </div>
              <div className="price-body">
                <div className="price-amount">2,000<span className="price-unit">円〜</span></div>
                <p>ちょっとしたお出かけや<br />お買い物に最適です。</p>
              </div>
            </div>
            <div className="price-card">
              <div className="price-header">
                <h3>1週間（ウィークリー）</h3>
              </div>
              <div className="price-body">
                <div className="price-amount">7,800<span className="price-unit">円〜</span></div>
                <p>ビジネスや長期の旅行に。<br />1日あたり約1,100円！</p>
              </div>
            </div>
            <div className="price-card">
              <div className="price-header">
                <h3>1ヶ月（マンスリー）</h3>
              </div>
              <div className="price-body">
                <div className="price-amount">24,800<span className="price-unit">円〜</span></div>
                <p>代車や長期出張に最適。<br />1日あたり約800円의衝撃価格！</p>
              </div>
            </div>
          </div>
          <p style={{textAlign: 'center', marginTop: '30px', color: '#666'}}>※A-1クラス（軽自動車・2ドア等）の料金です。保険料・消費税込み。</p>
        </div>
      </section>

      <section className="shop-info-section">
        <div className="container">
          <h2 className="section-title">店舗情報</h2>
          <div className="shop-grid">
            <div className="shop-details">
              <h3>X RENTACAR りんくう泉佐野店</h3>
              <table className="info-table">
                <tbody>
                  <tr>
                    <th><MapPin size={20} /> 住所</th>
                    <td>〒598-0006 大阪府泉佐野市市場西3丁目9-28</td>
                  </tr>
                  <tr>
                    <th><Phone size={20} /> 電話番号</th>
                    <td>072-463-1188</td>
                  </tr>
                  <tr>
                    <th><Clock size={20} /> 営業時間</th>
                    <td>09:00 ～ 19:00</td>
                  </tr>
                  <tr>
                    <th><Calendar size={20} style={{marginRight: '12px'}} /> 定休日</th>
                    <td>毎週水曜日</td>
                  </tr>
                </tbody>
              </table>
              <div style={{marginTop: '30px'}}>
                <a 
                  href="https://guts-rentacar.com/shop/osaka/rinkuizumisano/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}
                >
                  空車確認・ご予約はこちら <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <div className="shop-map">
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.412497843519!2d135.32135687635674!3d34.40356559837926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b91060934f07%3A0x8670c538a7c2e0f2!2z4¬4OD4OD7jg4Pjg4bjg7zjg4_jgqvjg7wg44KK44KT44  _4GG_5rOJ5L2Q6YeO5bqX!5e0!3m2!1sja!2sjp!4v1714280000000!5m2!1sja!2sjp" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{backgroundColor: '#001a3d', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <h2 className="section-title text-light" style={{marginBottom: '20px'}}>旅行の間に、愛車をピカピカに。</h2>
          <p style={{marginBottom: '30px', opacity: 0.9}}>
            関西国際空港をご利用なら、X Car Wash の無水洗車サービスがおすすめ。<br />
            お車を預けている間に、プロの手で新車のような輝きを取り戻します。
          </p>
          <Link to="/" className="btn-primary" style={{backgroundColor: '#FFD700', color: '#001a3d', border: 'none'}}>
            洗車サービスについて詳しく見る <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Rental;

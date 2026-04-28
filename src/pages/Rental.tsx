import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import './Rental.css';
import '../animations.css';

const Rental = () => {
  const scrollRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  return (
    <div className="rental-page">
      <section className="rental-hero">
        <div className="container hero-content">
          <h1>格安レンタカーサービス</h1>
          <p className="rental-intro">
            X RENTACAR（エックスレンタカー） りんくう泉佐野店では、<br />
            地域最安値クラスの格安レンタカーをご提供いたします。
          </p>
        </div>
      </section>

      <section className="price-section section-padding">
        <div className="container">
          <h2 className="section-title fade-in" ref={addToRefs}>格安料金プラン</h2>
          <div className="price-grid">
            {[
              { time: "24時間", price: "2,000", desc: "ちょっとしたお出かけや\nお買い物に最適です。" },
              { time: "1週間（ウィークリー）", price: "7,800", desc: "ビジネスや長期の旅行に。\n1日あたり約1,100円！" },
              { time: "1ヶ月（マンスリー）", price: "24,800", desc: "代車や長期出張に最適。\n1日あたり約800円の衝撃価格！" }
            ].map((plan, index) => (
              <div 
                key={index} 
                className="price-card fade-in" 
                ref={addToRefs}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="price-header">
                  <h3>{plan.time}</h3>
                </div>
                <div className="price-body">
                  <div className="price-amount">{plan.price}<span className="price-unit">円〜</span></div>
                  <p>{plan.desc.split('\n')[0]}<br />{plan.desc.split('\n')[1]}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="fade-in" ref={addToRefs} style={{textAlign: 'center', marginTop: '30px', color: '#666'}}>※A-1クラス（軽自動車・2ドア等）の料金です。保険料・消費税込み。</p>
        </div>
      </section>

      <section className="shop-info-section section-padding">
        <div className="container">
          <h2 className="section-title fade-in" ref={addToRefs}>店舗情報</h2>
          <div className="shop-grid">
            <div className="shop-details fade-in" ref={addToRefs}>
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
            <div className="shop-map fade-in" ref={addToRefs}>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.412497843519!2d135.32135687635674!3d34.40356559837926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b91060934f07%3A0x8670c538a7c2e0f2!2z44Ks44OD44OE44O744Os44Oz44K_44Kr44O8IOOCiuOCk-OBj-msiee3oemHjuW6lw!5e0!3m2!1sja!2sjp!4v1714280000000!5m2!1sja!2sjp" 
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

      <section className="section-padding fade-in" ref={addToRefs} style={{backgroundColor: '#001a3d', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <h2 className="section-title text-light" style={{marginBottom: '20px'}}>旅行の間に、愛車をピカピカに。</h2>
          <p style={{marginBottom: '30px', opacity: 0.9}}>
            関西国際空港をご利用なら、X car wash の無水洗車サービスがおすすめ。<br />
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

import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <Car size={24} color="#FFD700" />
            <span className="logo-main">X Car Wash</span>
          </div>
          <p className="footer-desc">
            関西国際空港の駐車場で、旅の間に車を綺麗にする。
            環境に優しく、愛車に優しい無水洗車サービス。
          </p>
        </div>

        <div className="footer-links">
          <h4>クイックリンク</h4>
          <ul>
            <li><Link to="/service">サービス紹介</Link></li>
            <li><Link to="/pricing">料金表</Link></li>
            <li><Link to="/faq">よくある質問</Link></li>
            <li><Link to="/reservation">ネット予約</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>お問い合わせ</h4>
          <p><Mail size={16} /> info@x-car-wash.com</p>
          <p><Phone size={16} /> 050-XXXX-XXXX (10:00-18:00)</p>
          <p><MapPin size={16} /> 関西国際空港 P1~P5 駐車場</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 X Car Wash. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

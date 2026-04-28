import { Link, useLocation } from 'react-router-dom';
import { Car, Calendar, Mail, HelpCircle, DollarSign, Menu, X, Key } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isRental = location.pathname === '/rental';

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-section">
          <Link to={isRental ? "/rental" : "/"} className="logo">
            <Car size={32} color="#FFD700" />
            <div className="logo-text">
              <span className="logo-main">{isRental ? 'X RENTACAR' : 'X car wash'}</span>
              <span className="logo-sub">{isRental ? '関西国際空港 レンタカーサービス' : '関西国際空港 無水洗車サービス'}</span>
            </div>
          </Link>
          
          <div className="service-switcher">
            <Link to="/" className={`nav-item service-tab ${!isRental ? 'active' : ''}`}>
              <Car size={16} />
              <span>洗車</span>
            </Link>
            <Link to="/rental" className={`nav-item service-tab ${isRental ? 'active' : ''}`}>
              <Key size={16} />
              <span>レンタカー</span>
            </Link>
          </div>
        </div>

        <nav className={`nav ${isOpen ? 'is-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/service" className="nav-item" onClick={() => setIsOpen(false)}>
                <Car size={18} />
                <span>サービス</span>
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="nav-item" onClick={() => setIsOpen(false)}>
                <DollarSign size={18} />
                <span>料金表</span>
              </Link>
            </li>
            <li>
              <Link to="/faq" className="nav-item" onClick={() => setIsOpen(false)}>
                <HelpCircle size={18} />
                <span>Q&A</span>
              </Link>
            </li>
            <li>
              <Link to="/reservation" className="nav-item reservation-btn" onClick={() => setIsOpen(false)}>
                <Calendar size={18} />
                <span>ネット予約</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item contact-btn" onClick={() => setIsOpen(false)}>
                <Mail size={18} />
                <span>問い合わせ</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

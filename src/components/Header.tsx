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
        <div className="logo-group">
          <Link to="/" className="logo">
            <Car size={32} color="#FFD700" />
            <div className="logo-text">
              <span className="logo-main">{isRental ? 'X RENTACAR' : 'X Car Wash'}</span>
              <span className="logo-sub">{isRental ? '格安レンタカーサービス' : '関西国際空港 無水洗車サービス'}</span>
            </div>
          </Link>
          {isRental ? (
            <Link to="/" className="rental-switch">
              <Car size={16} />
              <span>X Car Wash</span>
            </Link>
          ) : (
            <Link to="/rental" className="rental-switch">
              <Key size={16} />
              <span>レンタカー</span>
            </Link>
          )}
        </div>

        <nav className={`nav ${isOpen ? 'is-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item-container">
              <div className="nav-item service-dropdown-trigger">
                <Car size={18} />
                <span>サービス</span>
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/service" onClick={() => setIsOpen(false)}>洗車内容</Link>
                </li>
                <li>
                  <Link to="/solution" onClick={() => setIsOpen(false)}>無水洗車専用の溶剤</Link>
                </li>
              </ul>
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

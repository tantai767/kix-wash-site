import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Service from './pages/Service';
import WashingFlow from './pages/WashingFlow';
import Solution from './pages/Solution';
import SDGs from './pages/SDGs';
import Rental from './pages/Rental';
import RentalPricing from './pages/RentalPricing';
import RentalFAQ from './pages/RentalFAQ';
import RentalReservation from './pages/RentalReservation';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/washing-flow" element={<WashingFlow />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/sdgs" element={<SDGs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/rental/pricing" element={<RentalPricing />} />
            <Route path="/rental/faq" element={<RentalFAQ />} />
            <Route path="/rental/reservation" element={<RentalReservation />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

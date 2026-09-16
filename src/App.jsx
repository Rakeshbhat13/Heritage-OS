import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import CustodianRegister from './pages/custodian/Register';
import CustodianDashboard from './pages/custodian/Dashboard';
import CreateOffering from './pages/custodian/CreateOffering';
import Explore from './pages/visitor/Explore';
import OfferingDetails from './pages/visitor/OfferingDetails';
import Checkout from './pages/visitor/Checkout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            
            {/* Custodian Routes */}
            <Route path="/custodian/register" element={<CustodianRegister />} />
            <Route path="/custodian/dashboard" element={<CustodianDashboard />} />
            <Route path="/custodian/new" element={<CreateOffering />} />
            
            {/* Visitor Routes */}
            <Route path="/explore" element={<Explore />} />
            <Route path="/offering/:id" element={<OfferingDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

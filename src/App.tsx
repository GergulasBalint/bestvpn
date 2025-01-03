import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BestVPNs from './pages/BestVPNs';
import About from './pages/About';
import CityVPN from './pages/CityVPN';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/best-vpns" element={<BestVPNs />} />
            <Route path="/about" element={<About />} />
            <Route path="/city/:cityName" element={<CityVPN />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

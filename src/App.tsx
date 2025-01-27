import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BestVPNs from './pages/BestVPNs';
import About from './pages/About';
import CostComparison from './pages/CostComparison';
import FeatureComparisonPage from './pages/FeatureComparisonPage';
import CityVPN from './pages/CityVPN';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best-vpns" element={<BestVPNs />} />
          <Route path="/compare-features" element={<FeatureComparisonPage />} />
          <Route path="/compare-costs" element={<CostComparison />} />
          <Route path="/about" element={<About />} />
          <Route path="/city/:cityName" element={<CityVPN />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

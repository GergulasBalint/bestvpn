import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const BestVPNs = lazy(() => import('./pages/BestVPNs'));
const About = lazy(() => import('./pages/About'));
const CostComparison = lazy(() => import('./pages/CostComparison'));
const FeatureComparisonPage = lazy(() => import('./pages/FeatureComparisonPage'));
const CityVPN = lazy(() => import('./pages/CityVPN'));
const Resources = lazy(() => import('./pages/Resources'));
const FAQ = lazy(() => import('./pages/FAQ'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyber-blue"></div>
          </div>
        }>
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
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

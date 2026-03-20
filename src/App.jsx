import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import LandingPage from './pages/LandingPage';
import ResultPage from './pages/ResultPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import DreamDictionaryPage from './pages/DreamDictionaryPage';
import BlogPage from './pages/BlogPage';
import BlogWaterDreams from './pages/BlogWaterDreams';
import BlogFlyingDreams from './pages/BlogFlyingDreams';
import BlogTeethDreams from './pages/BlogTeethDreams';
import BlogRecurringDreams from './pages/BlogRecurringDreams';
import BlogColorDreams from './pages/BlogColorDreams';
import BlogNightmares from './pages/BlogNightmares';
import BlogAncientDreams from './pages/BlogAncientDreams';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/dream-dictionary" element={<DreamDictionaryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/water-dreams" element={<BlogWaterDreams />} />
        <Route path="/blog/flying-dreams" element={<BlogFlyingDreams />} />
        <Route path="/blog/teeth-dreams" element={<BlogTeethDreams />} />
        <Route path="/blog/recurring-dreams" element={<BlogRecurringDreams />} />
        <Route path="/blog/color-in-dreams" element={<BlogColorDreams />} />
        <Route path="/blog/stop-nightmares" element={<BlogNightmares />} />
        <Route path="/blog/ancient-dream-traditions" element={<BlogAncientDreams />} />
      </Routes>
    </LanguageProvider>
  );
}

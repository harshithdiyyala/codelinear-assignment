import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import SolutionsSection from './components/SolutionsSection.jsx';
import CoreBankingSection from './components/CoreBankingSection.jsx';
import CtaPanel from './components/CtaPanel.jsx';
import DigitalBankingSection from './components/DigitalBankingSection.jsx';
import InsightsSection from './components/InsightsSection.jsx';
import CaseStudiesSection from './components/CaseStudiesSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app" id="top">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <CoreBankingSection />
        <CtaPanel />
        <DigitalBankingSection />
        <InsightsSection />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

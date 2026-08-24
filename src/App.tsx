import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';
import CookieNotice from './components/CookieNotice';
import { useHashRoute } from './hooks/useHashRoute';
import { findLegalDoc } from './data/legal';

function App() {
  const route = useHashRoute();
  const legalDoc = findLegalDoc(route);

  return (
    <div className="min-h-screen">
      <Header />
      {legalDoc ? (
        <main>
          <LegalPage doc={legalDoc} />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Contact />
        </main>
      )}
      <Footer />
      <CookieNotice />
    </div>
  );
}

export default App;

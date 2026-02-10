import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';

import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import RpsResto from './RpsResto';
import ComingSoon from './ComingSoon';
import GrowthWithUs from './GrowthWithUs';

// Import gambar di bagian paling atas file
import rpsImg from '@/assets/RPSResto.jpeg';
import lawnbrookImg from '@/assets/Lawnbrook_hero.jpeg';
import spaceproImg from '@/assets/Spacepro_Hero.jpeg';
import bedtonicImg from '@/assets/bedtonic_hero.jpeg';
// import rpsImg from '@/assets/RPSresto.jpeg'; 
// // atau jika pakai alias @assets:
// import rpsImg from '@assets/RPSresto.jpeg';

// Data untuk Carousel agar kode lebih bersih (DRY)
const EXPERIENCES = [
  {
    category: "COFFEE & EATERY",
    title: "RYANPIBERSANO",
    desc: "From the artisanal brews of Ryan Pibersano, we serve not just flavors, but moments.",
    img: rpsImg,
    link: "/rps-resto",
    isExternal: false,
    cta: "MAKE A RESERVATION"
  },
  {
    category: "BAR & LOUNGE",
    title: "LAWNBROOK",
    desc: "Indulge in sophisticated spirits designed for the discerning night owl.",
    img: lawnbrookImg,
    link: "/Comingsoon",
    isExternal: false,
    cta: "EXPLORE THE NIGHT"
  },
  {
    category: "PRODUCTIVITY & WELLNESS",
    title: "THE LAWN SPACE",
    desc: "Your entire day, perfectly integrated. From high-stakes meetings and deep focus sessions to your daily workout and post-activity fuel.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop",
    link: "https://www.instagram.com/thelawnspace/",
    isExternal: true,
    cta: "BOOK A SESSION"
  },
  {
    category: "WORKING SPACE APP",
    title: "SPACEPRO",
    desc: "The shortcut to a healthier routine.",
    img: spaceproImg,
    link: "https://spacepro.id",
    isExternal: true,
    cta: "BOOK YOUR SPACE"
  },
  {
    category: "BEDDING & FASHION",
    title: "BEDTONIC",
    desc: "Sustainable linen bedding and clothing designed for comfort, durability, and a perfectly conscious home.",
    img: bedtonicImg,
    link: "https://bedtonic.com/",
    isExternal: true,
    cta: "GRAB YOUR COMFORT"
  },
  {
    category: "FLORIST",
    title: "FOLIA",
    desc: "An artisanal floral arrangement that transforms botanical beauty into elegance.",
    img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1480&auto=format&fit=crop",
    link: "/Comingsoon",
    isExternal: false,
    cta: "GRAB YOUR BOUQUET"
  }
];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0); // Progress 0 - 1
  const scrollRef = useRef(null);
  const totalCards = EXPERIENCES.length;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      // Hitung progress 0 sampai 1
      const progress = scrollLeft / maxScroll;
      setScrollProgress(progress);
    }
  };

  // Hitung activeIndex untuk keperluan klik dot (opsional)
  const activeIndex = Math.round(scrollProgress * (totalCards - 1));

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: (scrollRef.current.offsetWidth * 0.8) * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-visual"></div>
        <div className="container hero-content">
          <h1>Curating Lifestyle. <br /> Defined by Principles</h1>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section id="ethos" className="pillars-section">
        <div className="container">
          <div className="pillars-header">
            <span className="pre-title">OUR ETHOS</span>
            <h2>To empower the community with a better lifestyle</h2>
            <div className="header-line"></div>
          </div>

          <div className="pillar-carousel-wrapper">
            <div className="pillar-grid">
              {[
                { id: "01", title: "Commitment", desc: "An unwavering dedication to creating connections.", icon: "user" },
                { id: "02", title: "Precision", desc: "Meticulous attention to every detail.", icon: "target" },
                { id: "03", title: "Yield", desc: "Creating lasting value for your daily rhythm.", icon: "activity" }
              ].map((pillar) => (
                <div key={pillar.id} className="pillar-item">
                  <div className="pillar-number">{pillar.id}</div>
                  <div className="pillar-content">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.desc}</p>
                  </div>
                  <div className="pillar-footer-line"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM LOGOS */}
      <section className="partner-logos-container">
        <div className="container ecosystem-layout">
          <div className="main-brand-row">
            <img src="/Logo-Trifilosofi.png" alt="Trifilosofi" className="partner-logo brand-primary" />
          </div>
          <div className="sub-brand-grid">
            <img src="/lawnbrook.png" alt="Lawnbrook" className="partner-logo-lawnbrook" />
            <img src="/rps.png" alt="Ryan Pibersano" className="partner-logo-rps" />
            <img src="/spacepro.png" alt="SpacePro" className="partner-logo-spacepro" />
            <img src="/bedtonic.png" alt="bedtonic" className="partner-logo-bedtonic" />
          </div>
        </div>
      </section>

      {/* CURATED EXPERIENCES */}
      <section id="experiences" className="bu-section">
        <div className="container">
          <div className="section-header">
            <p className="pre-title">The Lifestyle Collection</p>
            <h2>Curated Experiences</h2>
          </div>

          <div className="bu-carousel-wrapper">
            <div className="bu-grid" ref={scrollRef} onScroll={handleScroll}>
              {EXPERIENCES.map((item, idx) => (
                <div key={idx} className="bu-card">
                  <div 
                    className="card-image-placeholder" 
                    style={{ backgroundImage: `url('${item.img}')` }}
                  />
                  <div className="card-text-content">
                    <p className="bu-category">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    {item.isExternal ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="card-link">{item.cta}</a>
                    ) : (
                      <Link to={item.link} className="card-link">{item.cta}</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bu-dots-container">
      {EXPERIENCES.map((_, i) => {
        // Logika untuk menentukan lebar dot secara dinamis
        // Kita hitung seberapa dekat progress dengan index dot saat ini
        const distance = Math.abs(scrollProgress * (totalCards - 1) - i);
        const isNear = distance < 1;
        
        // Dot akan melebar dari 10px sampai 30px berdasarkan kedekatan scroll
        const dynamicWidth = isNear ? 10 + (20 * (1 - distance)) : 10;
        const dynamicOpacity = isNear ? 0.5 + (0.5 * (1 - distance)) : 0.5;

        return (
          <span
            key={i}
            className="bu-dot"
            style={{ 
              width: `${dynamicWidth}px`,
              opacity: dynamicOpacity,
              backgroundColor: isNear ? '#000000' : '#d1d1d1',
              borderRadius: '5px' 
            }}
            onClick={() => scrollToCard(i)}
          ></span>
        );
      })}
    </div>
      </section>
      
    </main>
  );
};

// export default function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/rps-resto" element={<RpsResto />} />
//           <Route path="/Comingsoon" element={<ComingSoon />} />
//           <Route path="/GrowthWithUs" element={<GrowthWithUs />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Place it here */}
        <ScrollToTop /> 
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rps-resto" element={<RpsResto />} />
          <Route path="/Comingsoon" element={<ComingSoon />} />
          <Route path="/GrowthWithUs" element={<GrowthWithUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

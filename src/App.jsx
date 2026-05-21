import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // HelmetProvider is in main.jsx — only import Helmet here
import './index.css';

import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import RpsResto from './RpsResto';
import ComingSoon from './ComingSoon';
import GrowthWithUs from './GrowthWithUs';

import rpsImg from '@/assets/RPSResto.jpeg';
import lawnbrookImg from '@/assets/Lawnbrook_hero.jpeg';
// import lawnbrookEstate from '@/assets/LawnBrookLogo.png';
import spaceproImg from '@/assets/Spacepro_Hero.jpeg';
import bedtonicImg from '@/assets/bedtonic_hero.jpeg';
import theLawnSpaceImg from '@/assets/TheLawn.jpg';
import faviconImg from '@/assets/favicon_tli.jpeg';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
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
    img: theLawnSpaceImg,
    link: "https://www.instagram.com/spacepro.id/",
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Scrolls to top on every route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * SEO component — works because HelmetProvider wraps the whole app in main.jsx.
 * The <title> here will OVERRIDE the static <title> in index.html at runtime,
 * which is exactly what we want for per-page SEO.
 */
const SEO = ({ title, description, image }) => (
  <Helmet>
    <title>{title ? `${title} | Trifilosofi Lifestyle Indonesia` : 'Trifilosofi Lifestyle Indonesia'}</title>
    <meta name="description" content={description} />
    <link rel="icon" type="image/jpeg" href={faviconImg} />
    <link rel="canonical" href="https://www.trifilosofilifestyleindonesia.id" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title || 'Trifilosofi Lifestyle Indonesia'} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image || faviconImg} />
    <meta property="og:url" content="https://www.trifilosofilifestyleindonesia.id" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title || 'Trifilosofi Lifestyle Indonesia'} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);
  const totalCards = EXPERIENCES.length;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setScrollProgress(scrollLeft / maxScroll);
    }
  };

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
      <SEO
        title="Trifilosofi Lifestyle"
        description="Trifilosofi Lifestyle Indonesia — Curating lifestyle defined by principles. Experience artisanal brews, smart workspaces, and conscious fashion in one tech-integrated ecosystem."
      />

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
            <img src="/lawnbrookEstate.png" alt="LawnBrook Estate" className="partner-logo-lawnbrook-estate" />
            <img src="/rps.png" alt="Ryan Pibersano" className="partner-logo-rps" />
            <img src="/bedtonic.png" alt="Bedtonic" className="partner-logo-bedtonic" />
            <img src="/spacepro.png" alt="SpacePro" className="partner-logo-spacepro" />
            <img src="/lawnbrook.png" alt="Lawnbrook" className="partner-logo-lawnbrook" />
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

        {/* Scroll progress dots */}
        <div className="bu-dots-container">
          {EXPERIENCES.map((_, i) => {
            const distance = Math.abs(scrollProgress * (totalCards - 1) - i);
            const isNear = distance < 1;
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
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

// ---------------------------------------------------------------------------
// App root
// ---------------------------------------------------------------------------

export default function App() {
  // Dynamically set favicon from imported asset (works with Vite hashing)
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.type = 'image/jpeg';
    link.href = faviconImg;
  }, []);

  return (
    <Router>
      <div className="app-container">
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

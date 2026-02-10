import React, { useState } from 'react';
import './index.css'; 

const RpsResto = () => {
  const [filter, setFilter] = useState('all');

  const menuItems = [
    { id: 1, img: '/Chicken_Nanban.jpg', category: 'lunch', row: 1 },
    { id: 2, img: '/Nasi_Goreng_Nusantara.jpg', category: 'lunch', row: 1 },
    { id: 9, img: '/Beef_Yakimeshi.jpg', category: 'lunch', row: 1 },
    { id: 10, img: '/Salmon_Teriyaki.jpg', category: 'lunch', row: 1 },
    // { id: 3, img: '/Sop_Buntut.jpg', category: 'lunch', row: 2 },
    { id: 5, img: '/Soto_Jakarta.jpg', category: 'lunch', row: 2 },
    { id: 8, img: '/Beef_Saikoro.jpg', category: 'lunch', row: 2 },
    { id: 11, img: '/Giant_Burger.jpg', category: 'lunch', row: 2 },
    { id: 13, img: '/Ayam_Serundeng.jpg', category: 'lunch', row: 2 },
    { id: 4, img: '/Coffee.jpg', category: 'drinks', row: 1 },
    { id: 6, img: '/Pisang_Goreng_Keju.jpg', category: 'dessert', row: 1 },
    { id: 7, img: '/Proklamasi_Platter.jpg', category: 'appetizers', row: 1 },
    { id: 12, img: '/Chef_Salad.jpg', category: 'appetizers', row: 2 },
  ];

  const categories = ['lunch', 'drinks', 'dessert', 'appetizers'];

  // Fungsi Helper untuk merapikan nama makanan dari file string
  const formatName = (fileName) => {
    return fileName.replace('.jpg', '').replace('/', '').replace(/_/g, ' ');
  };

  const renderContent = (rowNum) => {
    const filteredItems = menuItems.filter(item => 
      item.row === rowNum && (filter === 'all' || item.category === filter)
    );

    if (filteredItems.length === 0) return null;

    return filteredItems.map((item) => (
      <div key={item.id} className="food-item">
        <div className="food-image-wrapper">
          <img src={item.img} alt={item.category} loading="lazy" />
          <div className="food-overlay">
             <span>{formatName(item.img)}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="rps-resto-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-logo">
          <img src="/Logo-RPS.png" alt="Ryan Pibersano Cafe" />
        </div>
        
        <img src="/RPS_Resto_Fixed.jpeg" alt="RPS Resto Interior" className="hero-main-img" />
        
        <div className="hero-text">
          <p>Ryan Pibersano Coffee & Eatery A quiet corner in the city’s heart. In the middle of Menteng’s hustle, we’ve carved out a space for you to slow down. <br/> Whether it’s the first sip of your morning latte or a long dinner that turns into late-night laughs, we don't just serve coffee and food.</p>
          {/* <p>Ryan Pibersano Coffee & Eatery A quiet corner in the city’s heart. In the middle of Menteng’s hustle, we’ve carved out a space for you to slow down. 
            <br>Whether it’s the first sip of your morning latte or a long dinner that turns into late-night laughs, we don't just serve coffee and food. 
            We host the moments that matter.
            </br></p> */}
          <a href="https://wa.me/628561000954" className="btn-book" target="_blank" rel="noreferrer">BOOK YOUR TABLE</a>
        </div>
        
        <div className="social-icons">
          <a href="https://www.instagram.com/ryanpibersano/" target="_blank" rel="noopener noreferrer">
            <img src="/Icon_IG.png" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@ryan.pibersano" target="_blank" rel="noopener noreferrer">
            <img src="/Icon_Tiktok.png" alt="TikTok" />
          </a>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="menu-section">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            ALL
          </button>
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`} 
              onClick={() => setFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <h2 className="menu-title">Savor A Selection<br/>Of Delightful Dishes</h2>

        <div className="menu-grid-container">
          {/* Baris 1 */}
          <div className="scroll-row">
            <div className="scroll-content">
              {renderContent(1)}
            </div>
          </div>
          
          {/* Baris 2 */}
          <div className="scroll-row">
            <div className="scroll-content">
              {renderContent(2)}
            </div>
          </div>
        </div>

        <div className="view-menu-container">
          <a href="https://drive.google.com/file/d/1DI70xb0TRui6cd6D0VpTn8prnSNVj0yZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="view-menu-btn">VIEW FULL MENU</button>
          </a>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="location-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.586676236319!2d106.8433221!3d-6.186036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4410f845a7d%3A0x6b490453d5a86a67!2sRyan%20Pibersano%20Cafe!5e0!3m2!1sid!2sid!4v1700000000000" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '15px' }} 
            allowFullScreen="" 
            loading="lazy"
            title="Ryan Pibersano Cafe Location"
          ></iframe>
        </div>
        
        <div className="location-info">
          <h2>OUR LOCATION</h2>
          <div className="info-grid">
            <div className="info-block">
              <h4>Opening Hours</h4>
              <p>Mon - Fri: 09.00 AM - 10.00 PM</p>
              <p>Sat: 09.00 AM - 06.00 PM</p>
              <p>Sun: Closed</p>
            </div>
            <div className="info-block">
              <h4>Contact Us</h4>
              <p>📞 +62 822 1828 1868</p>
            </div>
            <div className="info-block full-width">
              <h4>Address</h4>
              <p>Jalan Proklamasi No. 46, Menteng, Jakarta Pusat, 10320</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RpsResto;
import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer id="contact" className="main-footer">
      <div className="container footer-grid-main">
        {/* Kolom 1: About, Gallery, Grow */}
        <div className="footer-column">
          <div className="footer-group">
            <h4>ABOUT US</h4>
            <ul>
              {/* Menggunakan NavHashLink agar bisa scroll ke ID di halaman Home */}
              <li><NavHashLink smooth to="/#ethos">The Ethos</NavHashLink></li>
              <li><NavHashLink smooth to="/#experiences">The Business</NavHashLink></li>
            </ul>
          </div>
          <div className="footer-group">
            <h4>THE GALLERY</h4>
            <ul>
              <li><Link to="/gallery">Past Event</Link></li>
            </ul>
          </div>
          <div className="footer-group">
            <h4>GROW WITH US</h4>
            <ul>
              <li><Link to="/GrowthWithUs">Career Opportunity</Link></li>
            </ul>
          </div>
        </div>

        {/* Kolom 2: Curated Experience */}
        <div className="footer-column">
          <h4>CURATED EXPERIENCE</h4>
          <ul>
            <li><Link to="/rps-resto">RyanPibersano Coffee & Eatery</Link></li>
            <li><Link to="/Comingsoon">Lawnbrook Bar & Lounge</Link></li>
            
            {/* Link Eksternal menggunakan <a> tag agar tidak dianggap route internal */}
            <li><a href="https://spacepro.id" target="_blank" rel="noreferrer">Spacepro Apps</a></li>
            <li><a href="https://www.instagram.com/thelawnspace/" target="_blank" rel="noreferrer">The Lawn Space</a></li>
            <li><a href="https://bedtonic.com/" target="_blank" rel="noreferrer">Bedtonic. Bedding & Fashion</a></li>
            
            <li><Link to="/Comingsoon">Folia Florist</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Alamat & Kontak */}
        <div className="footer-column footer-contact">
          <h4>Trifilosofi Lifestyle Indonesia</h4>
          <address>
            <strong>SGH Tower</strong><br />
            Jalan Proklamasi No. 46 Pegangsaan<br />
            Menteng, Jakarta Pusat<br />
            10320
          </address>
          <div className="contact-links">
            <p>
              <span className="icon">✉</span> 
              <a href="mailto:inquiry.tli@trifilosofilifestyleindonesia.co.id" className="footer-link">
                inquiry.tli@trifilosofilifestyleindonesia.co.id
              </a>
            </p>
            <p>
              <span className="icon">📞</span> 
              <a href="tel:+622130009707" className="footer-link">
                +6221 30009707
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© 2025 Trifilosofi Lifestyle Indonesia, All Rights Reserved.</p>
          <div className="footer-lang">
            <div className="footer-divider"></div> 
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" 
              alt="Indonesia Flag" 
              className="flag" 
              style={{ width: '24px', height: 'auto' }}
            />
            <span>Indonesia (GMT +07:00)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
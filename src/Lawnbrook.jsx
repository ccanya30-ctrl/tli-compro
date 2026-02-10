import React from 'react';
import './lawnbrook.css';

const Lawnbrook = () => {
  return (
    <div className="lawnbrook-page">
      <section className="description-section">
        <div className="container">
          <h2 className="brand-section-title">Lawnbrook Bar & Lounge</h2>

          <div className="brand-logo-small">
            <div>
              <img src="./src/assets/img/Lawnbrook1.jpg" alt="Lawnbrook Interior" />
            </div>
            <div>
              <img src="./src/assets/img/Lawnbrook2.jpg" alt="Lawnbrook Cocktails" />
            </div>
            <div>
              <img src="./src/assets/img/Lawnbrook3.jpg" alt="Lawnbrook Ambiance" />
            </div>
          </div>
          
          <p className="main-desc">
            Lawnbrook menghadirkan pengalaman bar dan lounge yang eksklusif di jantung kota. 
            Dengan pilihan spirits kelas dunia, cocktail yang dikurasi secara ahli, dan suasana 
            sophisticated, kami menjadi destinasi utama bagi mereka yang menghargai ketenangan 
            dan kemewahan di malam hari.
          </p>

          <div className="button-group">
            <a 
              href="https://wa.me/628561000954" 
              className="btn-action" 
              target="_blank" 
              rel="noreferrer"
            >
              Private Booking
            </a>
            <a 
              href="https://drive.google.com/file/d/17CwVPqOQCzJ12ORNw37At19pdU440AZm/view?usp=sharing" 
              className="btn-action" 
              target="_blank" 
              rel="noreferrer"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container grid-container">
          <div className="map-container">
            <iframe
              title="Lawnbrook Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5052304892463!2d106.8426218758872!3d-6.202206893785672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f50033861a7d%3A0x0d000478e4b060f2!2sRyanPibersano%20Cafe!5e0!3m2!1sid!2sid!4v1715667845678!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="info-details">
            <div className="info-block">
              <h3>
                <a 
                  href="https://maps.app.goo.gl/9T8n8Gv5ZJz6G8v6A" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="location-link"
                >
                  LOCATION
                </a>
              </h3>
              <p>
                Jl. Proklamasi No.46, RT.10/RW.2, Pegangsaan, Kec. Menteng, 
                Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10320
              </p>
            </div>

            <div className="info-block">
              <h3>OPENING HOURS</h3>
              <p>MON – SAT: 11.00 AM – 01.00 AM</p>
              <p>SUN: 10.00 AM – 01.00 AM</p>
            </div>

            <div className="info-block">
              <h3>CONTACT US</h3>
              <p>WA: +62822 1828 1868</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lawnbrook;
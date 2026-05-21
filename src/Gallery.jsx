import React, { useState, useRef } from 'react';
import Header from './Header'; 
import './index.css';

const Gallery = () => {
  const [openGalleries, setOpenGalleries] = useState({});
  const [isLoadedMore, setIsLoadedMore] = useState(false);
  
  // Referensi untuk scroll ke baris tertentu
  const scrollRefs = useRef({});

  const toggleGallery = (id) => {
    setOpenGalleries(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToEvent = (id) => {
    // 1. Load event tersembunyi jika perlu
    const isHidden = hiddenEvents.some(e => e.id === id);
    if (isHidden && !isLoadedMore) {
      setIsLoadedMore(true);
    }

    // 2. Buka galeri fotonya
    setOpenGalleries(prev => ({ ...prev, [id]: true }));

    // 3. Scroll ke lokasi judul event
    setTimeout(() => {
      const element = scrollRefs.current[id];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const eventsData = [
    {
      id: 'farewell',
      title: 'Corporate Gathering',
      mainImg: '/assets/Farewell_Direktur_IT&Digital_Heroimg.jpg',
      images: ['Farewell_Pertamina', 'Farewell_Direktur_IT&Digital2', 'Farewell_Direktur_IT&Digital3', 'Farewell_Direktur_IT&Digital4'],
      path: '/assets/' 
    },
    {
      id: 'training',
      title: 'Family Events & Wedding',
      mainImg: '/assets/Khitan_Heroimg.jpg',
      images: ['Khitan_1', 'Khitan_2', 'Khitan_3', 'Khitan_4'],
      path: '/assets/'
    }
  ];

  const hiddenEvents = [
    {
      id: 'fgd',
      title: 'Forum & Group Discussion',
      mainImg: '/assets/FGD2_Kebijakan_Biodiesel_Heroimg.jpg',
      images: ['FGD2_Kebijakan_Biodiesel1', 'FGD2_Kebijakan_Biodiesel2', 'FGD2_Kebijakan_Biodiesel3', 'Forum&GroupDiscussion1', 'Forum&GroupDiscussion2', 'Forum&GroupDiscussion3', 'Forum&GroupDiscussion4'],
      path: '/assets/'
    },
    {
      id: 'tc',
      title: 'Training & Classroom',
      mainImg: '/assets/In_House_Training_Kompetensi_Jabatan_Heroimg.jpg',
      images: ['In_House_Training_Kompetensi_Jabatan8', 'In_House_Training_Kompetensi_Jabatan7', 'In_House_Training_Kompetensi_Jabatan6', 'In_House_Training_Kompetensi_Jabatan5', 'In_House_Training_Kompetensi_Jabatan1', 'In_House_Training_Kompetensi_Jabatan2', 'Training&Classroom1', 'Training&Classroom2', 'Training&Classroom3'],
      path: '/assets/'
    },
    {
      id: 'bm',
      title: 'Board Meeting',
      mainImg: '/assets/Board_Meeting_Heroimg.jpg',
      images: ['Board_Meeting1', 'Board_Meeting2', 'Board_Meeting3', 'Board_Meeting4', 'Board_Meeting5'],
      path: '/assets/'
    }
  ];

  const EventItemGroup = ({ event }) => (
    <div 
      className="event-item-group" 
      ref={el => scrollRefs.current[event.id] = el}
      style={{ padding: '40px 0', borderTop: '1px solid #eee' }}
    >
      {/* Header Baris: Judul dan Tombol View */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h3 style={{ fontSize: '1.8rem', textTransform: 'uppercase', margin: 0, fontWeight: '500', letterSpacing: '2px' }}>
          {event.title}
        </h3>
        <button 
          className="btn-see-more-text" 
          onClick={() => toggleGallery(event.id)}
          style={{ color: '#fc4f00', borderBottom: '1px solid #fc4f00', paddingBottom: '2px', cursor: 'pointer' }}
        >
          {openGalleries[event.id] ? 'CLOSE PHOTOS' : 'VIEW PHOTOS'}
        </button>
      </div>

      {/* Konten Carousel Snap-X */}
      {openGalleries[event.id] && (
        <div className="gallery-carousel-area">
          <div className="snap-x custom-scrollbar" style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            gap: '15px', 
            paddingBottom: '20px',
            scrollSnapType: 'x mandatory'
          }}>
            {event.images.map((imgName, idx) => (
              <div key={idx} className="snap-start" style={{ flexShrink: 0 }}>
                <img 
                  src={`${event.path}${imgName}.jpg`} 
                  alt={`${event.title} ${idx + 1}`} 
                  style={{ width: '380px', height: '250px', objectFit: 'cover', borderRadius: '4px' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/380x250?text=TLI+Gallery'; }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="gallery-page">
      <Header />

      {/* Judul Utama Tetap Dipertahankan */}
      <section className="gallery-hero" style={{ padding: '80px 0 20px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: '200', letterSpacing: '8px', margin: 0 }}>
            THE GALLERY
          </h1>
          <p style={{ color: '#888', marginTop: '10px', fontSize: '14px', letterSpacing: '2px' }}>MEMORIES & MILESTONES</p>
        </div>
      </section>

      {/* Grid Kategori Card Atas */}
      <section className="carousel-container-gallery" style={{ marginBottom: '80px' }}>
        <div className="carousel-flex-gallery custom-scrollbar">
          {[...eventsData, ...hiddenEvents].map(event => (
            <div 
              className="card-item-gallery" 
              key={event.id} 
              onClick={() => scrollToEvent(event.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-img-box-gallery">
                <img src={event.mainImg} alt={event.title} />
              </div>
              <div className="card-footer-gallery">
                <h3 className="event-name-gallery">{event.title}</h3>
                <p style={{ fontSize: '10px', color: '#fc4f00', letterSpacing: '1px' }}>GO TO GALLERY</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daftar Baris Galeri */}
      <section className="event-list-section-gallery">
        <div className="container">
          {eventsData.map((event) => (
            <EventItemGroup key={event.id} event={event} />
          ))}

          {isLoadedMore && hiddenEvents.map(event => (
            <EventItemGroup key={event.id} event={event} />
          ))}

          {!isLoadedMore && (
            <div className="see-more-box" style={{ textAlign: 'center', padding: '60px 0' }}>
              <button className="btn-see-more" onClick={() => setIsLoadedMore(true)}>
                LOAD MORE EVENTS
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
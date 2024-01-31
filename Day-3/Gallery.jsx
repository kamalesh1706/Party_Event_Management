import React, { useState, useEffect } from 'react';
import './Gallery.css';
import FooterComponent from './FooterComponent';
import Navbar from '../components/Navbar';
{/* <Gallery></Gallery> */}
const imgUrls = [
  './src/images/img2.jpg',
  './src/images/img1.jpg',
  'https://source.unsplash.com/5KvPQc1Uklk/800x600',
  'https://source.unsplash.com/GtYFwFrFbMA/800x600',
  'https://source.unsplash.com/Igct8iZucFI/800x600',
  'https://source.unsplash.com/M01DfkOqz7I/800x600',
  'https://source.unsplash.com/MoI_cHNcSK8/800x600',
  'https://source.unsplash.com/M0WbGFRTXqU/800x600',
  'https://source.unsplash.com/s48nn4NtlZ4/800x600',
  'https://source.unsplash.com/E4944K_4SvI/800x600',
  'https://source.unsplash.com/F5Dxy9i8bxc/800x600',
  'https://source.unsplash.com/F5Dxy9i8bxc/800x600',
  'https://source.unsplash.com/E4944K_4SvI/800x600',
  'https://source.unsplash.com/F5Dxy9i8bxc/800x600',
  'https://source.unsplash.com/iPum7Ket2jo/800x600'
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const renderImageContent = (src, index) => (
    <div key={src} onClick={() => openModal(index)}>
      <img src={src} alt={src} />
    </div>
  );

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    setCurrentIndex(null);
  };

  const findPrev = (e) => {
    if (e) {
      e.preventDefault();
    }
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const findNext = (e) => {
    if (e) {
      e.preventDefault();
    }
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < imgUrls.length ? prevIndex + 1 : prevIndex
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) closeModal();
      if (e.keyCode === 37 && currentIndex > 0) findPrev();
      if (e.keyCode === 39 && currentIndex + 1 < imgUrls.length) findNext();
    };

    document.body.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <>
    <Navbar/>
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">{imgUrls.map(renderImageContent)}</div>
      <GalleryModal
        closeModal={closeModal}
        findPrev={findPrev}
        findNext={findNext}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex + 1 < imgUrls.length}
        src={imgUrls[currentIndex]}
        />
        {/* <FooterComponent/> */}
    </div>
        </>
  );
};

const GalleryModal = ({ closeModal, hasPrev, hasNext, findNext, findPrev, src }) => {
  if (!src) {
    return null;
  }

  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="modal-body">
          <a href="#" className="modal-close" onClick={closeModal}>
            &times;
          </a>
          {hasPrev && (
            <a href="#" className="modal-prev" onClick={findPrev}>
              &lsaquo;
            </a>
          )}
          {hasNext && (
            <a href="#" className="modal-next" onClick={findNext}>
              &rsaquo;
            </a>
          )}
          <img src={src} alt={src} />
        </div>
      </div>
      
    </div>
  );
};

export default Gallery;

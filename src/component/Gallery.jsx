import { useEffect, useState } from "react";
import { urlFor } from '../imageUrlBuilder';
import { fetchGallery } from "./fetchGallery";

export default function Component() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    fetchGallery().then((data) => {
      const fetchedPhotos = data.map((item) => ({
        id: item._id,
        url: urlFor(item.imgSrc).width(400).url(),
        fullUrl: urlFor(item.imgSrc).url(), 
        alt: item.altText,
        description: item.description,
        height: Math.floor(Math.random() * 200),
      }));
      setPhotos(fetchedPhotos);
    });
  }, []);

  // Modal styles
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '1rem',
    zIndex: 1000,
    width:"60%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "15px"
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  };

  const headerStyle = {
    fontSize: '2rem',
    color: "white",
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridAutoRows: '10px',
  };

  const gridItemStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '70vh',
    objectFit: 'contain',
  };

  const descriptionStyle = {
    marginTop: '1rem',
    textAlign: 'center',
  };

  const closeButtonStyle = {
    right: '2.5rem',
    borderRadius: "10px",
    fontSize: '1.5rem',
    color: 'green',
    background: "white",
    border: '2px solid blue',
    cursor: 'pointer',
  };


  // Function to close the modal
  const closeModal = () => setSelectedPhoto(null);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Photo Gallery</h1>
      <div style={gridStyle}>
        {photos.map((avtar) => (
          <div
            key={avtar.id}
            style={{
              ...gridItemStyle,
              gridRowEnd: `span ${Math.ceil(avtar.height / 10)}`,
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'}
          >
            <img
              src={avtar.url}
              alt={avtar.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onClick={() => setSelectedPhoto(avtar)} 
            />
            <p>{avtar.description}</p>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <>
          <div style={overlayStyle} onClick={closeModal}></div>
          <div style={modalStyle}>
            <img
              src={selectedPhoto.fullUrl}
              alt={selectedPhoto.alt}
              style={imgStyle}
            />
            <p style={descriptionStyle}>{selectedPhoto.description}</p>
            <button style={closeButtonStyle} onClick={closeModal}>CLOSE</button>
          </div>
        </>
      )}
    </div>
  );
}
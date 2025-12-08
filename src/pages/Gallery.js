// src/pages/Gallery.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState({});
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  // Fetch albums & photos (read-only)
  useEffect(() => {
    axios
      .get("https://nss-website-backend.onrender.com/api/albums")
      .then((res) => {
        setAlbums(res.data.albums);
        setPhotos(res.data.photos);
      })
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);

  return (
    <div className="gallery-wrapper">
    <div className="gallery-container">
      <h2 className="gallery-title">📸 Our Gallery</h2>

      {!selectedAlbum ? (
        <div className="album-grid">
          {albums.map((album) => (
            <div
              className="album-card"
              key={album}
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="album-thumb">
                {photos[album]?.[0] ? (
                  <img src={photos[album][0].url} alt={`${album} thumbnail`} />
                ) : (
                  <div className="empty-thumb">No Photos</div>
                )}
              </div>
              <div className="album-name">{album}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="album-view">
          <div className="album-header">
            <h3>{selectedAlbum}</h3>
            <button className="back-btn" onClick={() => setSelectedAlbum(null)}>
              ← Back
            </button>
          </div>

          <div className="photo-grid">
            {photos[selectedAlbum]?.map((photo, index) => (
              <div
                className="photo-card"
                key={index}
                onClick={() => setModalImage(photo.url)}
              >
                <img src={photo.url} alt={photo.name} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal View */}
      {modalImage && (
        <div
          className="modal-overlay"
          onClick={() => setModalImage(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Full View" className="modal-img" />
            <button
              className="modal-close"
              onClick={() => setModalImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Gallery;

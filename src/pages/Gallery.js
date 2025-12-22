// src/pages/Gallery.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";
import { API_BASE } from "../utils/api";

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState({});
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  // Fetch albums & photos (read-only)
  useEffect(() => {
    const fetchAlbums = () => {
      axios
        .get(`${API_BASE}/api/albums`)
        .then((res) => {
          const data = res.data || [];
          setAlbums(data.map((a) => a.name));

          const photosMap = {};
          data.forEach((a) => {
            photosMap[a.name] = a.photos || [];
          });
          setPhotos(photosMap);
        })
        .catch((err) => console.error("Error fetching gallery:", err));
    };

    // initial fetch
    fetchAlbums();

    // refresh when gallery is updated elsewhere in the app
    const onGalleryUpdated = () => fetchAlbums();
    window.addEventListener('galleryUpdated', onGalleryUpdated);

    // also listen to storage for cross-tab updates
    const onStorage = (e) => {
      if (e.key === 'galleryUpdated') fetchAlbums();
    };
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('galleryUpdated', onGalleryUpdated);
      window.removeEventListener('storage', onStorage);
    };
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
                    <img
                      src={photos[album][0].url && photos[album][0].url.startsWith('http') ? photos[album][0].url : `${API_BASE}${photos[album][0].url}`}
                      alt={`${album} thumbnail`}
                    />
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
              <button
                className="back-btn"
                onClick={() => setSelectedAlbum(null)}
              >
                ← Back
              </button>
            </div>

            <div className="photo-grid">
              {photos[selectedAlbum]?.map((photo, index) => {
                const src = photo.url && photo.url.startsWith('http') ? photo.url : `${API_BASE}${photo.url}`;
                return (
                  <div className="photo-card" key={index}>
                    <div className="photo-img-wrapper">
                      <img src={src} alt={photo.name || "photo"} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal View */}
        {modalImage && (
          <div
            className="modal-overlay"
            onClick={() => setModalImage(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage}
                alt="Full View"
                className="modal-img"
              />
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

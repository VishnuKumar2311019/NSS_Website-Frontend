import React, { useEffect, useState } from "react"; 
import "./Gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://nss-website-backend.onrender.com/api/photos")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPhotos(data);
        } else {
          setPhotos([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching gallery photos:", err);
        setPhotos([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="gallery-container">
        <h2>Gallery</h2>
        <p>Loading photos...</p>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      <h2>NSS Gallery</h2>
      <p>Moments captured from our activities</p>

      {photos.length === 0 ? (
        <p>No photos available</p>
      ) : (
        <div className="gallery-grid">
          {photos.map((photo, index) => {
            const imageUrl = photo.url
              ? (photo.url.startsWith("http")
                  ? photo.url
                  : `https://nss-website-backend.onrender.com/${photo.url}`)
              : `https://nss-website-backend.onrender.com/uploads/${photo.filename || photo.name}`;

            return (
              <img
                key={photo._id || index}
                src={imageUrl}
                alt="NSS Gallery"
                className="gallery-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  console.log("Image failed to load:", imageUrl);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;

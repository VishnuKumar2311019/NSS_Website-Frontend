import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VerticalDashboardPhotography.css";
import { FaPlus, FaTrash } from "react-icons/fa";

const PhotographyDashboard = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [newAlbumName, setNewAlbumName] = useState("");
  const [photos, setPhotos] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // for modal view

  // Fetch albums and photos
  useEffect(() => {
    axios.get("http://nss-website-backend.onrender.com/api/albums")
      .then((res) => {
        setAlbums(res.data.albums);
        setPhotos(res.data.photos);
      })
      .catch((err) => console.error("Error fetching albums:", err));
  }, []);

  // Create album
  const createAlbum = () => {
    const trimmed = newAlbumName.trim();
    if (!trimmed || albums.includes(trimmed)) return;

    axios.post("http://nss-website-backend.onrender.com/api/albums", { name: trimmed })
      .then(() => {
        setAlbums([...albums, trimmed]);
        setPhotos((prev) => ({ ...prev, [trimmed]: [] }));
        setNewAlbumName("");
      })
      .catch((err) => console.error("Error creating album:", err));
  };

  // Delete album
  const deleteAlbum = (albumName) => {
    axios.delete(`http://nss-website-backend.onrender.com/api/albums/${encodeURIComponent(albumName)}`)
      .then(() => {
        setAlbums(albums.filter((a) => a !== albumName));
        const updatedPhotos = { ...photos };
        delete updatedPhotos[albumName];
        setPhotos(updatedPhotos);
        if (selectedAlbum === albumName) setSelectedAlbum(null);
      })
      .catch((err) => console.error("Error deleting album:", err));
  };

  // Upload photos
  const uploadPhotos = (e, albumName) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("photos", file);
    });

    axios.post(`http://nss-website-backend.onrender.com/api/albums/${encodeURIComponent(albumName)}/photos`, formData)
      .then((res) => {
        const uploaded = res.data.uploadedPhotos;
        setPhotos((prev) => ({
          ...prev,
          [albumName]: [...(prev[albumName] || []), ...uploaded],
        }));
      })
      .catch((err) => console.error("Error uploading photos:", err));
  };

  // Delete photo
  const deletePhoto = (albumName, index) => {
    axios.delete(`http://nss-website-backend.onrender.com/api/albums/${encodeURIComponent(albumName)}/photos/${encodeURIComponent(index)}`)
      .then(() => {
        const updated = photos[albumName].filter((_, i) => i !== index);
        setPhotos((prev) => ({ ...prev, [albumName]: updated }));
      })
      .catch((err) => console.error("Error deleting photo:", err));
  };


  const handlePhotoClick = (photo, albumName) => {
  setSelectedImage({ ...photo, albumName });
};

  return (
    <div className="photography-dashboard">
      <h2>📷 Photography Dashboard</h2>

      {!selectedAlbum ? (
        <>
          <div className="album-creation">
            <input
              type="text"
              placeholder="Enter new album name..."
              value={newAlbumName}
              onChange={(e) => setNewAlbumName(e.target.value)}
            />
            <button onClick={createAlbum}><FaPlus /> Create</button>
          </div>

          <div className="album-grid">
            {albums.map((album) => (
              <div className="album-card" key={album}>
              <div className="album-thumbnail" onClick={() => setSelectedAlbum(album)}>
                {photos[album]?.[0] ? (
                  <img src={photos[album][0].url} alt="Thumbnail" />
                ) : (
                  <div className="empty-thumb">No Photos</div>
                )}

                {/* DELETE ICON */}
                <FaTrash
                  className="delete-album-icon"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent opening album
                    deleteAlbum(album);
                  }}
                />
              </div>
              <div className="album-footer">
                <p>{album}</p>
              </div>
            </div>

            ))}
          </div>
        </>
      ) : (
        <div className="album-view">
          <div className="album-header">
            <h3>{selectedAlbum}</h3>
            <button className="back-btn" onClick={() => setSelectedAlbum(null)}>← Back</button>
            <label className="upload-label">
              + Upload
              <input type="file" multiple onChange={(e) => uploadPhotos(e, selectedAlbum)} />
            </label>
          </div>

          <div className="photo-grid">
            {photos[selectedAlbum]?.map((photo, index) => (
              <div className="photo-card" key={index}>
                <img
                  src={photo.url}
                  alt={photo.name}
                  onClick={() => setSelectedImage(photo.url)}
                />
                <FaTrash
                  className="delete-icon"
                  onClick={() => deletePhoto(selectedAlbum, index)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === MODAL VIEW === */}
      {selectedImage && (
        <div className="photo-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full View" className="photo-modal-img" />
            <button className="photo-modal-close" onClick={() => setSelectedImage(null)}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyDashboard;

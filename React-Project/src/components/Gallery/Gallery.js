import React, { useEffect, useState } from "react";
import "./Gallery.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbzPnxOIfwnxBL7nzdHB6yVymuBShkz6EJJHJWWJX06KerIYmi50nGSuubd0zrqmtCs7/exec";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos || []);
        setVideos(data.videos || []);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Photos Section */}

      <section className="gallery-section">
        <h2>Temple Photo Gallery</h2>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item"
              onClick={() => setSelectedImage(photo.imageUrl)}
            >
              <img src={photo.imageUrl} alt={photo.name} />

              {/* <div className="gallery-overlay">{photo.name}</div> */}
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}

      <section className="gallery-section">
        <h2>Temple Videos</h2>

        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div key={video.id} className="video-card">
                <iframe
                  src={video.videoUrl}
                  title={video.name}
                  width="100%"
                  height="300"
                  allow="autoplay"
                  allowFullScreen
                />

                {/* <span>{video.name}</span> */}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="" />
        </div>
      )}
    </>
  );
};

export default Gallery;

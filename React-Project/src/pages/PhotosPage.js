import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import Gallery from '../components/Gallery/Gallery';
import './PhotosPage.css';

const PhotosPage = () => {
  return (
    <section id="page-photos" className="page-photos">
      <div className="photos-header">
        <PageHeader
          eyebrow="🌸 Darshan • Divine Glimpses"
          title="Temple"
          titleHighlight="Gallery"
          intro="Moments of divinity captured — from the adorned sanctum to the joyous kirtans that fill these sacred walls."
        />
      </div>

      <Gallery />
    </section>
  );
};

export default PhotosPage;

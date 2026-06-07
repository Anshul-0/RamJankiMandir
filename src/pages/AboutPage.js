import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import Timeline from '../components/Timeline/Timeline';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <section id="page-about" className="page-about">
      <PageHeader
        eyebrow="🕉 Itihas • History"
        title="Our"
        titleHighlight="Sacred Story"
        intro="A timeless journey of devotion, faith, and the unwavering love for Lord Ram and Mata Janaki — passed down through generations."
        containerClass="about-header"
      />

      <div className="about-content">
        <div className="about-text">
          <h3>The Divine Origins</h3>
          <p>
            Shree Ram Janaki Mandir was born from the sacred vision of Late Pandit Tilakdhari Upadhyay, a revered scholar and devoted seeker of the divine. Moved by profound faith and an earnest desire to create a permanent abode for Lord Ram and his consort Mata Janaki, he consecrated this holy temple with purity of heart and spirit.
          </p>
          <p>
            The presiding deities — Lord Shree Ram and Mata Janaki — have been worshipped here with unwavering devotion since the temple's founding. Their divine effulgence, draped in sacred garments and adorned with gold, continues to draw thousands of devotees who seek blessings, solace, and spiritual upliftment.
          </p>

          <div className="highlight-block">
            <p>"Where there is Ram, there is dharma. Where there is Janaki, there is compassion. This mandir is a home for both."</p>
          </div>

          <h3>Our Living Tradition</h3>
          <p>
            The temple has remained a vibrant center of spiritual activity. Daily pujas, seasonal utsavs (festivals), and community kirtans keep the sacred flame alive. The melodious chanting of Ram Naam fills the mandir from the first light of dawn to the last glow of the evening aarti.
          </p>
          <p>
            Under the current ownership of Pandit Devendra Upadhyay and the spiritual guidance of our Mahants, the temple continues to grow while honoring the traditions established by its founder.
          </p>

          <h3>The Temple Premises</h3>
          <p>
            The mandir houses several sacred shrines. The main sanctum enshrines Lord Ram and Mata Janaki, beautifully adorned and attended to daily. Adjacent shrines include the powerful form of Bhagwan Shiva and other deities, creating a comprehensive spiritual campus where every devotee's prayer finds its home.
          </p>
          <p>
            Community gatherings — including bhandara, kirtan sandhyas, and religious discourses — are regularly held in the temple courtyard, keeping the spirit of satsang alive for families across generations.
          </p>
        </div>

        <div className="about-image-stack">
          <img className="about-img" src="/mnt/user-data/uploads/WhatsApp_Image_2026-06-06_at_16_23_04.jpeg" alt="Temple Deities" onError={(e) => e.target.style.display = 'none'} />
          <img className="about-img" src="/mnt/user-data/uploads/WhatsApp_Image_2026-06-06_at_16_22_46.jpeg" alt="Kirtan" onError={(e) => e.target.style.display = 'none'} />
          <img className="about-img" src="/mnt/user-data/uploads/WhatsApp_Image_2026-06-06_at_16_22_48.jpeg" alt="Temple Exterior" onError={(e) => e.target.style.display = 'none'} />
        </div>
      </div>

      <Timeline />
    </section>
  );
};

export default AboutPage;

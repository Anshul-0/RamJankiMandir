import React from 'react';
import './Timeline.css';

const TimelineItem = ({ year, heading, body }) => (
  <div className="timeline-item">
    <div className="timeline-year">{year}</div>
    <div className="timeline-heading">{heading}</div>
    <div className="timeline-body">{body}</div>
  </div>
);

const Timeline = () => {
  const timelineData = [
    {
      year: 'FOUNDING ERA',
      heading: 'Temple Established by Late Pandit Tilakdhari Upadhyay',
      body: 'With devotion as his foundation and faith as his compass, the revered founder consecrated the Shree Ram Janaki Mandir, establishing daily worship and welcoming devotees from the surrounding region.'
    },
    {
      year: 'PRIESTLY SUCCESSION',
      heading: 'Mahant Suresh Das — The Late Custodian',
      body: 'The late Mahant Suresh Das served as priest with great dedication and deepened the temple\'s spiritual programs, maintaining the purity of rituals and expanding the sangha of devotees.'
    },
    {
      year: 'PRESENT CHAPTER',
      heading: 'Pandit Devendra Upadhyay Takes Ownership',
      body: 'Continuing the sacred lineage, Pandit Devendra Upadhyay assumed stewardship of the temple, preserving its traditions while embracing the community with renewed vigor and devotion.'
    },
    {
      year: 'TODAY',
      heading: 'A Vibrant Spiritual Community',
      body: 'Under the guidance of Mahants Sarvesh, Atul, Anurag, and Alok Upadhyay — with administrative support from General Manager Suyash Upadhyay — the mandir thrives as a beacon of devotion, service, and community spirit.'
    }
  ];

  return (
    <div className="timeline">
      <h2 className="timeline-title">Journey Through Time</h2>
      <div className="timeline-items">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            heading={item.heading}
            body={item.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

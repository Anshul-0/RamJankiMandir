import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import MemberCard from '../components/MemberCard/MemberCard';
import './MembersPage.css';

const MembersPage = () => {
const founder = {
  role: '✦ Temple Founder — In Eternal Memory ✦',
  image: '/images/Founder_Portrait.jpeg',
  name: 'Late Pandit Tilakdhari Upadhyay',
  description: `॥ धर्मो रक्षति रक्षितः ॥

"One who protects dharma is protected by dharma."

Shree Ram Janaki Mandir stands as a symbol of the devotion, faith, and vision of its revered founder, Late Pandit Tilakdhari Upadhyay. With deep dedication to Lord Ram and Mata Janaki, he established this sacred temple as a place where devotees could gather to pray, seek blessings, and find spiritual peace.

Through his selfless service and unwavering faith, he laid the foundation of a divine space that continues to inspire generations. His life reflected the values of dharma, humility, and devotion, leaving behind a legacy that remains alive in every prayer, bhajan, and religious ceremony performed within the temple.

Even today, his blessings and teachings guide the temple and its devotees. As we remember his noble contributions, we honor the spirit of seva and devotion that he dedicated to the service of God and humanity.`
};

const members = [
  {
    role: 'Temple Owner',
    image: '/images/Devendra_Upadhyay.jpeg',
    name: 'Pandit Devendra Upadhyay',
    description:
      'The current custodian of the temple...'
  },
  {
    role: 'Late Priest — In Memory',
    image: '/images/suresh-das.jpg',
    name: 'Mahant Suresh Das',
    description:
      'The late and revered previous priest...'
  },
  {
    role: 'General Manager',
    image: '/images/Suyash_Upadhyay.jpeg',
    name: 'Mr. Suyash Upadhyay',
    description:
      'The General Manager of Shree Ram Janaki Mandir...'
  },
  {
    role: 'Current Priest',
    image: '/images/Sarvesh_Upadhyay.jpeg',
    name: 'Mahant Sarvesh Upadhyay',
    description:
      'A devoted priest of the mandir...'
  },
  {
    role: 'Current Priest',
    image: '/images/Atul_Upadhyay.jpeg',
    name: 'Mahant Atul Upadhyay',
    description:
      'Mahant Atul Upadhyay serves the temple...'
  },
  {
    role: 'Current Priest',
    image: '/images/Anurag_Upadhyay.jpeg',
    name: 'Mahant Anurag Upadhyay',
    description:
      'With a heart full of bhakti...'
  },
  {
    role: 'Current Priest',
    image: '/images/Alok_Upadhyay.jpeg',
    name: 'Mahant Alok Upadhyay',
    description:
      'Mahant Alok Upadhyay is a dedicated priest...'
  }
];

  return (
    <section id="page-members" className="page-members">
      <PageHeader
        eyebrow="🙏 Seva • Service"
        title="Our"
        titleHighlight="Sacred Family"
        intro="Those who dedicate their lives to the seva of Lord Ram and Mata Janaki, keeping the lamp of dharma burning bright."
        containerClass="members-header"
      />

      <div className="members-grid">
        {/* Founder - spans full width */}
        <MemberCard member={founder} isFounder={true} />

        {/* Regular members */}
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

export default MembersPage;

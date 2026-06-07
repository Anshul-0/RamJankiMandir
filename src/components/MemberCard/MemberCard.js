import React from 'react';
import './MemberCard.css';

const MemberCard = ({ member, isFounder = false }) => {
  if (isFounder) {
    return (
      <div className="member-card founder">
        <div className="founder-image">
          <img
            src={member.image}
            alt={member.name}
            className="member-photo"
          />
        </div>

        <div className="founder-content">
          <span className="member-role-badge">
            {member.role}
          </span>

          <h2 className="member-name">
            {member.name}
          </h2>

          <p className="member-desc founder-desc">
            {member.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="member-card">
      <span className="card-flowers">❀ ❀ ❀</span>

      <span className="member-role-badge">
        {member.role}
      </span>

      <div className="member-avatar">
        <img
          src={member.image}
          alt={member.name}
          className="member-photo"
        />
      </div>

      <div className="member-name">
        {member.name}
      </div>

      <p className="member-desc">
        {member.description}
      </p>
    </div>
  );
};

export default MemberCard;
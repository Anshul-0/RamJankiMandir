import React from 'react';
import './Stats.css';

const StatsCard = ({ number, label }) => (
  <div className="stat-card">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

const Stats = () => {
  return (
    <div className="stats-row">
      <StatsCard number="50" label="Years of Devotion" />
      <StatsCard number="8" label="Dedicated Members" />
      <StatsCard number="4" label="Active Mahants" />
      <StatsCard number="365" label="Days of Puja Per Year" />
    </div>
  );
};

export default Stats;

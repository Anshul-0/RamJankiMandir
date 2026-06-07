import React from 'react';
import './PujaSchedule.css';

const ScheduleRow = ({ puja, time, details }) => (
  <tr>
    <td>{puja}</td>
    <td>{time}</td>
    <td>{details}</td>
  </tr>
);

const PujaSchedule = () => {
  const scheduleData = [
    {
      puja: 'Mangala Aarti',
      time: '6:00 AM',
      details: 'First aarti of the day, welcoming the Lord'
    },
    {
      puja: 'Abhishek & Shringar',
      time: '7:00 AM',
      details: 'Sacred bathing and adorning of deities'
    },
    {
      puja: 'Bhog Aarti',
      time: '12:00 PM',
      details: 'Midday offering and aarti'
    },
    {
      puja: 'Sandhya Aarti',
      time: '7:00 PM',
      details: 'Evening aarti with deepam and flowers'
    },
    {
      puja: 'Shayan Aarti',
      time: '9:00 PM',
      details: 'Final aarti before closing the mandir'
    },
    {
      puja: 'Weekly Kirtan',
      time: 'Sundays 6:00 PM',
      details: 'Community bhajan-kirtan, all welcome'
    }
  ];

  return (
    <div className="puja-schedule">
      <h3>Daily Puja & Aarti Schedule</h3>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Puja / Seva</th>
            <th>Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <ScheduleRow
              key={index}
              puja={item.puja}
              time={item.time}
              details={item.details}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PujaSchedule;

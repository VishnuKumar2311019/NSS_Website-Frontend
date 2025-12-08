import React from 'react';
import './InitiativesPage.css';

const initiatives = [
  {
    title: '🌿 Sapling Drive - July 2025',
    description: 'Over 500 saplings were planted across campus and nearby villages as part of our green initiative.',
  },
  {
    title: '🏥 Blood Donation Camp - June 2025',
    description: 'In collaboration with Red Cross, we collected 1200+ units of blood with over 300 donors participating.',
  },
  {
    title: '🧹 Swachh Bharat Clean-Up - May 2025',
    description: 'Volunteers led a campus and beach clean-up under the Swachh Bharat mission.',
  },
  {
    title: '📚 Rural Education Program - April 2025',
    description: 'Students taught schoolchildren in Kalavakkam village in subjects like Math, English, and Science.',
  },
  {
    title: '🚶‍♀️ Health Awareness Walkathon - March 2025',
    description: 'A 3km walkathon was organized to raise awareness on mental health and wellness.',
  },
];

const InitiativesPage = () => {
  return (
    <div className="initiatives-wrapper">
      <h2 className="initiatives-title">Recent Initiatives</h2>
      <p className="initiatives-intro">
        These are some of the impactful events organized by our NSS volunteers, reflecting our commitment to service.
      </p>

      <div className="initiatives-grid">
        {initiatives.map((item, index) => (
          <div className="initiative-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativesPage;

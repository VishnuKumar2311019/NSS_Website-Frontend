import React from 'react';
import './VolunteerStoriesPage.css'; // import the CSS file

const VolunteerStoriesPage = () => {
  const stories = [
    {
      text: "Volunteering with NSS has been one of the most transformative experiences of my college life. It taught me empathy, leadership, and teamwork.",
      name: "Ananya R.",
      role: "Final Year CSE"
    },
    {
      text: "The ability to create real-world impact while learning is what makes NSS so special.",
      name: "Rahul K.",
      role: "Second Year EEE"
    }
  ];

  return (
    <div className="stories-wrapper">
      <h2 className="stories-title">Volunteer Stories</h2>
      <div className="stories-grid">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <p className="story-text">"{story.text}"</p>
            <div className="story-author">
              <h4>{story.name}</h4>
              <span>{story.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerStoriesPage;

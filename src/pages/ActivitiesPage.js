import React, { useEffect, useState } from 'react';
import './ActivitiesPage.css';

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://nss-website-backend.onrender.com/api/activities')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setActivities(data);
        } else {
          setActivities([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching activities:', err);
        setActivities([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="activities-container">
        <h2>Activities</h2>
        <p>Loading activities...</p>
      </div>
    );
  }

  return (
    <div className="activities-container">
      <h2>NSS Activities</h2>
      <p>Explore our latest activities and events</p>
      
      {activities.length === 0 ? (
        <div className="no-activities">
          <p>No activities available at the moment.</p>
        </div>
      ) : (
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={activity._id || index} className="activity-card">
              <div className="activity-header">
                <h3>{activity.title}</h3>
                <span className="activity-date">{activity.date}</span>
              </div>
              <div className="activity-content">
                <p className="activity-description">{activity.description}</p>
                <div className="activity-details">
                  <span className="activity-location">📍 {activity.location || 'SSN Campus'}</span>
                  <span className="activity-status">Status: {activity.status || 'Past'}</span>
                </div>
                {activity.photos && activity.photos.length > 0 && (
                  <div className="activity-photos">
                    <h4>Photos:</h4>
                    <div className="photos-grid">
                      {activity.photos.map((photo, photoIndex) => {
                        const imageUrl = photo.url 
                          ? (photo.url.startsWith('http') ? photo.url : `https://nss-website-backend.onrender.com${photo.url}`)
                          : `https://nss-website-backend.onrender.com/uploads/${photo.filename || photo.name}`;
                        
                        return (
                          <img 
                            key={photoIndex} 
                            src={imageUrl} 
                            alt={`Activity photo ${photoIndex + 1}`}
                            className="activity-photo"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              console.log('Image failed to load:', imageUrl);
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
                {activity.reports && activity.reports.length > 0 && (
  <div className="activity-reports">
    <h4>Reports:</h4>
    <ul>
      {activity.reports.map((report, reportIndex) => {
        const baseUrl = report.url;

        const reportUrl =
          baseUrl && baseUrl.startsWith("https://res.cloudinary.com")
            ? `${baseUrl}?response-content-disposition=${encodeURIComponent(
                `attachment;filename=${report.original_name}`
              )}`
            : baseUrl;

        return (
          <li key={reportIndex}>
            <a href={`https://nss-website-backend.onrender.com/download-report?url=${encodeURIComponent(report.url)}&filename=${encodeURIComponent(report.original_name)}`}
              className="report-link"
            >
              📄 {report.original_name}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
)}


              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivitiesPage;

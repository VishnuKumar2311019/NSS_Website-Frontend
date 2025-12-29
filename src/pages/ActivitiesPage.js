import React, { useEffect, useState } from "react";
import "./ActivitiesPage.css";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://nss-website-backend.onrender.com/api/activities")
      .then((res) => res.json())
      .then((data) => {
        setActivities(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching activities:", err);
        setActivities([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="activities-container">
        <h2>NSS Activities</h2>
        <p>Loading activities...</p>
      </div>
    );
  }

  return (
    <div className="activities-container">
      <h2>NSS Activities</h2>
      <p>Explore our latest activities and events</p>

      {activities.length === 0 ? (
        <p>No activities available.</p>
      ) : (
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={activity._id || index} className="activity-card">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <p>📍 {activity.location || "SSN Campus"}</p>
              <p>Status: {activity.status || "Past"}</p>

              {/* PHOTOS */}
              {activity.photos?.length > 0 && (
                <div className="photos-grid">
                  {activity.photos.map((photo, i) => {
                    const imageUrl = photo.url?.startsWith("http")
                      ? photo.url
                      : `https://nss-website-backend.onrender.com${photo.url}`;

                    return (
                      <img
                        key={i}
                        src={imageUrl}
                        alt="Activity"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    );
                  })}
                </div>
              )}

              {/* REPORTS */}
              {activity.reports?.length > 0 && (
                <ul>
                  {activity.reports.map((report, i) => (
                    <li key={i}>
                      <a
                        href={`https://nss-website-backend.onrender.com/api/download-report?url=${encodeURIComponent(report.url)}&filename=${encodeURIComponent(report.original_name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📄 {report.original_name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivitiesPage;

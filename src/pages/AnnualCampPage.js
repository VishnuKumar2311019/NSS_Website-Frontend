import React from 'react';
import './AnnualCampPage.css';
import MainLayout from './MainLayout';

const AnnualCampPage = () => {
  const images = require.context('../assets/camp-gallery', false, /\.(png|jpe?g|svg)$/);
  const imageList = images.keys().map(images);

  // Helper: Group images by day using filename convention "dayX-..."
  const groupImagesByDay = (day) => {
    return imageList.filter((img) => img.includes(`day${day}`));
  };

  return (
    <MainLayout>

      <div className="camp-container">
        <aside className="camp-sidebar">
          <nav>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#day1">Day 1</a></li>
              <li><a href="#day2">Day 2</a></li>
              <li><a href="#day3">Day 3</a></li>
              <li><a href="#day4">Day 4</a></li>
              <li><a href="#day5">Day 5</a></li>
              <li><a href="#day6">Day 6</a></li>
              <li><a href="#day7">Day 7</a></li>
              <li><a href="#conclusion">Conclusion</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </nav>
        </aside>

        <main className="camp-content">
          <section id="overview">
            <h2>Overview</h2>
            <p>
              <strong>SSN COLLEGE OF ENGINEERING</strong><br />
              KALAVAKKAM – 603110<br /><br />
              <strong>NSS ANNUAL CAMP REPORT</strong><br />
              <strong>Date:</strong> 24.02.2024 - 01.03.2024<br /><br />
              The NSS unit of SSN College and Anna University conducted the NSS Annual Camp of 2024
              in Thandalam Village with nearly 70 volunteers over 7 impactful days.
            </p>
          </section>

          <section id="day1">
            <h2>Day 1 - Team Formation & Village Survey</h2>
            <p>
              Volunteers conducted village surveys covering 85 households and began school renovation
              activities while building strong community connections.
            </p>

            {groupImagesByDay(1).length > 0 && (
              <div className="day-gallery">
                <h3>Day 1 Photos</h3>
                <div className="gallery-grid">
                  {groupImagesByDay(1).map((img, idx) => (
                    <img key={idx} src={img} alt={`Day 1 - ${idx + 1}`} />
                  ))}
                </div>
              </div>
            )}
          </section>

          <section id="day2">
            <h2>Day 2 - Saplings & Community Drive</h2>
            <p>
              Saplings were planted in schools and garbage clearance drives were conducted,
              strengthening environmental awareness.
            </p>
          </section>

          <section id="day3">
            <h2>Day 3 - Empowering Students & Civic Engagement</h2>
            <p>
              Infrastructure improvements continued, and a voter ID registration drive
              helped register around 100 individuals.
            </p>
          </section>

          <section id="day4">
            <h2>Day 4 - School Renovation & Youth Discussion</h2>
            <p>
              Classroom renovations were completed and interactive sessions were conducted
              on social awareness.
            </p>
          </section>

          <section id="day5">
            <h2>Day 5 - Lake Cleanup & Fun Activities</h2>
            <p>
              A lake cleanup drive was conducted with EFI, followed by fun activities
              to boost volunteer morale.
            </p>
          </section>

          <section id="day6">
            <h2>Day 6 - Science Expo & Cultural Heritage</h2>
            <p>
              A science exhibition and cultural visit strengthened both academic and
              cultural learning.
            </p>
          </section>

          <section id="day7">
            <h2>Day 7 - Valedictory & Reflections</h2>
            <p>
              The valedictory ceremony celebrated volunteer contributions and
              concluded the camp on a positive note.
            </p>
          </section>

          <section id="conclusion">
            <h2>Conclusion</h2>
            <p>
              The NSS Annual Camp 2024 fostered leadership, service, and community bonding,
              leaving a lasting impact on both volunteers and villagers.
            </p>
          </section>

          <section id="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {imageList.map((img, index) => (
                <img key={index} src={img} alt={`Camp Photo ${index + 1}`} />
              ))}
            </div>
          </section>
        </main>
      </div>

    </MainLayout>
  );
};

export default AnnualCampPage;

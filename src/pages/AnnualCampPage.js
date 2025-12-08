import './AnnualCampPage.css';


const AnnualCampPage = () => {
  const images = require.context('../assets/camp-gallery', false, /\.(png|jpe?g|svg)$/);
  const imageList = images.keys().map(images);



  // Helper: Group images by day using filename convention "dayX-..."
  const groupImagesByDay = (day) => {
    return imageList.filter((img) => img.includes(`day${day}`));
  };

  return (
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
            <li><a href="#highlights">Highlights</a></li>
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
            The NSS unit of SSN College and Anna University conducted the NSS Annual Camp of 2024 in Thandalam Village, Thiruporur. The camp ran from February 24th to March 1st with the enthusiastic participation of nearly 70 NSS volunteers. Across 7 impactful days, several community-focused initiatives were carried out with passion and dedication.
          </p>
        </section>

        <section id="day1">
          <h2>Day 1 - Team Formation & Village Survey</h2>
          <p>
            Volunteers were divided into six teams and began painting tasks and conducting village surveys. They covered 85 households, collecting data on occupation, water access, and challenges like land certification and skepticism toward self-help groups. Despite hurdles, warm engagement with villagers fostered strong community bonds. Volunteers also started renovating Thiruporur Girls High School and aimed to finish within four days.
          </p>
           {/* Mini-gallery for Day 1 */}
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
            Volunteers planted saplings at Panchayat Union Middle School and Mettu Thandalam Elementary School. They also launched painting projects and garbage clearance drives. An inspiring speech by SSN alumnus Dharun Aditya uplifted the team. Reflection sessions highlighted growth in community service and personal development.
          </p>
        </section>

        <section id="day3">
          <h2>Day 3 - Empowering Students & Civic Engagement</h2>
          <p>
            Volunteers empowered school students at Thandalam Panchayat Union Middle School and improved infrastructure at Thiruporur Girls High School. A voter ID registration drive at SSN registered ~100 individuals. Volunteers also helped with catering services and prepped for more painting projects. Reflection time was used for strategic planning.
          </p>
        </section>

        <section id="day4">
          <h2>Day 4 - School Renovation & Youth Discussion</h2>
          <p>
            Volunteers completed the classroom renovations at Thiruporur Girls High School. At Thandalam Panchayat Union Primary School, interiors were painted freshly. On the occasion of National Youth Day (Jan 12), an interactive session on "Causes, Conflicts, and Solutions of Social Isolation" was conducted with professors. Volunteers shared heartfelt insights, earning praise from faculty.
          </p>
        </section>

        <section id="day5">
          <h2>Day 5 - Lake Cleanup & Fun Activities</h2>
          <p>
            The volunteers continued beautifying Thandalam Primary School by enhancing fencing for tree planting. A major cleanup was conducted at Kumizhi Lake in collaboration with EFI Organisation. Nithin from EFI guided the efforts. The day ended with engaging, fun activities to lift spirits and promote volunteer happiness.
          </p>
        </section>

        <section id="day6">
          <h2>Day 6 - Science Expo & Cultural Heritage</h2>
          <p>
            Teams painted the interiors of the local Anganvadi while others hosted a science exhibition for school children. Dr. P. Vijayalakshmi (ECE HOD) visited, planted saplings, and encouraged volunteers. Later, a cultural trip to the Five Rathas in Mahabalipuram took place. The day wrapped up with a campfire and group games to strengthen camaraderie.
          </p>
        </section>

        <section id="day7">
          <h2>Day 7 - Valedictory & Reflections</h2>
          <p>
            The final day began with preparations for the valedictory at Thandalam Panchayat Union Middle School. Guests included Principal V.E. Annamalai, local leaders, and the school headmaster. They all appreciated the volunteers’ service and the connection built with the community. Saplings were planted, and a feedback session helped volunteers reflect and share their learnings. The camp ended on a positive, memorable note.
          </p>
        </section>

        <section id="conclusion">
          <h2>Conclusion</h2>
          <p>
            The NSS Annual Camp 2024 was a week of service, leadership, and learning. Volunteers not only improved village infrastructure and education but also grew personally through teamwork, cultural activities, and civic engagement. The bond between SSN and Thandalam Village continues to grow, promising a better tomorrow.
          </p>
        </section>
        <section id="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">

          {/* If using dynamic approach */}
          {imageList.map((img, index) => (
            <img key={index} src={img} alt={`Camp Photo ${index + 1}`} />
          ))} 
        </div>
        </section>

      </main>
    </div>
  );
};

export default AnnualCampPage;

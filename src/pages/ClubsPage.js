// ClubsPage.jsx
import React, { useState } from "react";
import "./ClubsPage.css";
import MainLayout from './MainLayout';

const clubs = {
  Nature: {
    title: "🌳 Nature Club",
    descriptionTitle: "About Nature Club",
    description: "Focused on environmental awareness, plantation drives, and eco-friendly practices. Join us to make the world greener and cleaner!",
    mission: "To foster a deep connection with nature and promote sustainable practices among students and staff.",
    vision: "A campus where every individual is a steward of the environment.",
    activities: [
      "Tree plantation drives",
      "Nature walks and clean-up events",
      "Eco-friendly habit workshops",
      "Collaboration with environmental NGOs",
      "Biodiversity awareness campaigns",
      "Wildlife conservation seminars",
      "Green campus mapping"
    ],
    achievements: "Planted over 500 trees in the last year, organized 10+ clean-up events, and partnered with 3 NGOs.",
    collaborations: "WWF India, Green India Foundation",
    futurePlans: "Launch a campus-wide biodiversity survey and expand green spaces."
  },
  Sustainability: {
    title: "♻️ Sustainability Club",
    descriptionTitle: "About Sustainability Club",
    description: "Promotes sustainable living, waste management, and green initiatives on campus. Be a part of the change for a better tomorrow!",
    mission: "To lead the campus towards a zero-waste future and inspire sustainable habits.",
    vision: "A self-sustaining campus with zero landfill waste.",
    activities: [
      "Waste segregation workshops",
      "Recycling programs",
      "Sustainability seminars",
      "Renewable resource advocacy",
      "Green campus initiatives",
      "Composting projects",
      "Energy conservation campaigns"
    ],
    achievements: "Reduced campus waste by 30%, launched a successful recycling program, and hosted the annual Sustainability Summit.",
    collaborations: "Clean India Mission, SolarTech Solutions",
    futurePlans: "Implement solar panels and expand composting to all hostels."
  },
  Tulir: {
    title: "🎨 Tulir Club",
    descriptionTitle: "About Tulir Club",
    description: "Encourages cultural heritage, traditions, and creativity through various activities. Celebrate diversity and unleash your creativity with us!",
    mission: "To celebrate and preserve cultural diversity while nurturing creative talents.",
    vision: "A vibrant campus where every culture and art form is celebrated.",
    activities: [
      "Art exhibitions and competitions",
      "Cultural festivals",
      "Creative writing workshops",
      "Traditional crafts promotion",
      "Talent shows and performances",
      "Inter-college art collaborations",
      "Student magazine publishing"
    ],
    achievements: "Hosted the largest inter-college art fest, published a student anthology, and revived traditional crafts workshops.",
    collaborations: "Local artists, National Art Council",
    futurePlans: "Start a campus mural project and launch an online art gallery."
  },
  Electoral: {
    title: "🗳️ Electoral Club",
    descriptionTitle: "About Electoral Club",
    description: "Spreads awareness about electoral literacy, democracy, and civic duties. Empower yourself and others to make informed choices!",
    mission: "To educate and empower students about democratic processes and civic responsibilities.",
    vision: "A campus where every student is an informed and active citizen.",
    activities: [
      "Voter registration drives",
      "Debates and discussions on democracy",
      "Electoral process education",
      "Civic responsibility campaigns",
      "Mock elections",
      "Constitution Day celebrations",
      "Leadership development workshops"
    ],
    achievements: "Registered 1000+ new voters, organized 5 mock elections, and conducted democracy workshops for local schools.",
    collaborations: "Election Commission of India, Youth for Democracy",
    futurePlans: "Expand outreach to nearby colleges and host a democracy hackathon."
  },
  DrugAwareness: {
    title: "🚫 Drug Awareness Club",
    descriptionTitle: "About Drug Awareness Club",
    description: "Conducts campaigns and sessions to spread awareness against substance abuse. Stand with us for a healthier and safer community!",
    mission: "To create a safe and supportive environment by educating about the dangers of substance abuse.",
    vision: "A campus free from substance abuse and full of support.",
    activities: [
      "Anti-drug campaigns",
      "Counseling sessions",
      "Collaboration with health professionals",
      "Peer support programs",
      "Educational material distribution",
      "Mental health awareness drives",
      "Addiction recovery workshops"
    ],
    achievements: "Reached 2000+ students through campaigns, established a peer support network, and partnered with local health experts.",
    collaborations: "National Drug Control Bureau, Mind Matters Foundation",
    futurePlans: "Launch a campus helpline and organize annual wellness week."
  },
  WISEWing: {
    title: "👩‍🎓 WISE Wing Club",
    descriptionTitle: "About WISE Wing Club",
    description: "Supports women empowerment, inclusivity, and equality through events and workshops. Join hands to inspire and uplift each other!",
    mission: "To empower women and promote inclusivity and equality across campus.",
    vision: "A campus where every woman feels empowered and supported.",
    activities: [
      "Leadership workshops for women",
      "Gender equality seminars",
      "Mentorship programs",
      "Self-defense classes",
      "Inclusivity and diversity campaigns",
      "Women in STEM initiatives",
      "Community outreach projects"
    ],
    achievements: "Trained 300+ women in leadership, launched mentorship programs, and organized campus-wide inclusivity events.",
    collaborations: "UN Women, Women in STEM India",
    futurePlans: "Start a women’s innovation lab and host an annual empowerment summit."
  }
};

export default function ClubsPage() {
  const [activeTab, setActiveTab] = useState("Nature");

  return (
    <MainLayout>

      <div className="clubs-page">
        <h1>Our Clubs</h1>

        {/* Tabs */}
        <div className="club-tabs">
          {Object.keys(clubs).map((clubKey) => (
            <button
              key={clubKey}
              className={activeTab === clubKey ? "active" : ""}
              onClick={() => setActiveTab(clubKey)}
            >
              {clubs[clubKey].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="club-content">
          <h2>{clubs[activeTab].title}</h2>
          <h3>{clubs[activeTab].descriptionTitle}</h3>
          <p>{clubs[activeTab].description}</p>

          <strong>Mission:</strong>
          <p>{clubs[activeTab].mission}</p>

          <strong>Vision:</strong>
          <p>{clubs[activeTab].vision}</p>

          <strong>Key Activities:</strong>
          <ul>
            {clubs[activeTab].activities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>

          <strong>Achievements:</strong>
          <p>{clubs[activeTab].achievements}</p>

          <strong>Notable Collaborations:</strong>
          <p>{clubs[activeTab].collaborations}</p>

          <strong>Future Plans:</strong>
          <p>{clubs[activeTab].futurePlans}</p>
        </div>
      </div>

    </MainLayout>
  );
}

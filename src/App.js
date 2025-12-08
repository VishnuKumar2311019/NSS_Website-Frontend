import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MissionPage from './pages/MissionPage';
import TeamsPage from './pages/TeamsPage';
import InitiativesPage from './pages/InitiativesPage';
import AchievementsPage from './pages/AchievementsPage';
import AnnualCampPage from './pages/AnnualCampPage';
import VolunteerStoriesPage from './pages/VolunteerStoriesPage';
import AnnualReportPage from './pages/AnnualReportPage';
import CollaboratorsPage from './pages/CollaboratorsPage';
import ContactUsPage from './pages/ContactUsPage';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import VerticalDashboardPhotography from './pages/VerticalDashboardPhotography';
import Gallery from './pages/Gallery';
import ActivitiesPage from './pages/ActivitiesPage';
import ResetPassword from './pages/ResetPassword';
import ClubsPage from './pages/ClubsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/initiatives" element={<InitiativesPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/annualcamp" element={<AnnualCampPage />} />
        <Route path="/volunteer_stories" element={<VolunteerStoriesPage />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />
        <Route path="/annualReport" element={<AnnualReportPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/vertical-dashboard/photography" element={<VerticalDashboardPhotography />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/ClubsPage" element={<ClubsPage />} />

      </Routes>
    </Router>
  );
}

export default App;

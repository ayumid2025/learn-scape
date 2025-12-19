import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import SubjectsPage from '@/pages/SubjectsPage';
import LessonsPage from '@/pages/LessonsPage';
import GamesPage from '@/pages/GamesPage';
import QuizPage from '@/pages/QuizPage';
import ProgressPage from '@/pages/ProgressPage';
import ProfilePage from '@/pages/ProfilePage';
import TeacherPortal from '@/pages/TeacherPortal';
import FamilyPortal from '@/pages/FamilyPortal';
import ComingSoonPage from '@/pages/ComingSoonPage';
import PortalSelectionPage from '@/pages/PortalSelectionPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-bg font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/portal" element={<PortalSelectionPage />} />
            <Route path="/portal/teacher" element={<TeacherPortal />} />
            <Route path="/portal/family" element={<FamilyPortal />} />
            <Route path="/about" element={<ComingSoonPage title="About Us & Safety" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
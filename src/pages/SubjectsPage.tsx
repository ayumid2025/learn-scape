import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

const subjects = [
  {
    name: 'Mathematics',
    emoji: '🧮',
    color: 'bg-blue-500',
    shadowColor: 'hover:shadow-blue-400/40',
    path: '/lessons?subject=math',
  },
  {
    name: 'English',
    emoji: '📚',
    color: 'bg-orange-500',
    shadowColor: 'hover:shadow-orange-400/40',
    path: '/lessons?subject=english',
  },
  {
    name: 'General Science',
    emoji: '🔬',
    color: 'bg-green-500',
    shadowColor: 'hover:shadow-green-400/40',
    path: '/lessons?subject=science',
  },
  {
    name: 'Social Studies',
    emoji: '🌍',
    color: 'bg-yellow-500',
    shadowColor: 'hover:shadow-yellow-400/40',
    path: '/lessons?subject=history',
  },
  {
    name: 'Arts & Music',
    emoji: '🎨',
    color: 'bg-purple-500',
    shadowColor: 'hover:shadow-purple-400/40',
    path: '/lessons?subject=arts',
  },
  {
    name: 'Coding & STEM',
    emoji: '💻',
    color: 'bg-pink-500',
    shadowColor: 'hover:shadow-pink-400/40',
    path: '/lessons?subject=coding',
  },
  {
    name: 'Language Learning',
    emoji: '🗣️',
    color: 'bg-teal-500',
    shadowColor: 'hover:shadow-teal-400/40',
    path: '/lessons?subject=language',
  },
  {
    name: 'Life Skills',
    emoji: '🌱',
    color: 'bg-indigo-500',
    shadowColor: 'hover:shadow-indigo-400/40',
    path: '/lessons?subject=lifeskills',
  },
];

const SubjectCard = ({ subject }) => (
  <Link
    to={subject.path}
    className={`relative group flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg transform hover:-translate-y-3 transition-all duration-300 ${subject.color} ${subject.shadowColor} hover:shadow-2xl`}
  >
    <div className="absolute -top-8 text-6xl transition-transform duration-300 group-hover:scale-110">{subject.emoji}</div>
    <div className="mt-8 text-center">
      <h3 className="text-2xl font-fredoka text-white font-bold">{subject.name}</h3>
    </div>
  </Link>
);

const SubjectsPage = () => (
  <PageLayout title="Explore Your Subjects">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 pt-10">
      {subjects.map((subject) => (
        <SubjectCard key={subject.name} subject={subject} />
      ))}
    </div>
  </PageLayout>
);

export default SubjectsPage;

import PageLayout from '@/components/layout/PageLayout';
import { CatchyButton } from '@/components/custom/CatchyButton';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const lessons = [
  { title: 'Introduction to Addition', duration: 5, type: 'video' },
  { title: 'The Alphabet Song', duration: 3, type: 'audio' },
  { title: 'What are Plants?', duration: 7, type: 'interactive' },
  { title: 'Basic Shapes', duration: 4, type: 'video' },
];

const LessonCard = ({ title, duration, type }: { title: string, duration: number, type: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg-soft flex items-center justify-between transform transition-transform duration-300 hover:-translate-y-2">
    <div className="flex items-center gap-4">
      <div className="bg-brand-primary/10 p-3 rounded-full">
        <PlayCircle className="w-8 h-8 text-brand-primary" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
        <p className="text-gray-500">{duration} min {type}</p>
      </div>
    </div>
    <CatchyButton asChild variant="primary" size="sm">
        <Link to="/quiz">Start Lesson</Link>
    </CatchyButton>
  </div>
);


const LessonsPage = () => {
  return (
    <PageLayout title="Interactive Lessons">
        <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
                {lessons.map((lesson, index) => (
                    <LessonCard key={index} {...lesson} />
                ))}
            </div>
            <div className="mt-12 text-center">
                 <p className="text-lg text-gray-600">More lessons coming soon!</p>
            </div>
        </div>
    </PageLayout>
  );
};

export default LessonsPage;
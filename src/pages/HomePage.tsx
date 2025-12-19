import { Link } from 'react-router-dom';
import { CatchyButton } from '@/components/custom/CatchyButton';
import { ArrowRight } from 'lucide-react';

const mascotUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6f67b13e-f4c5-4df6-8031-3475c4d916e8/Kidedu Online Education Center-mascot-w549ha9-1766128927389.webp';
const mathIconUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6f67b13e-f4c5-4df6-8031-3475c4d916e8/math-icon-gfyn3r5-1766128946786.webp';
const englishIconUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6f67b13e-f4c5-4df6-8031-3475c4d916e8/english-icon-paqmfad-1766128952703.webp';
const scienceIconUrl = 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6f67b13e-f4c5-4df6-8031-3475c4d916e8/science-icon-c4r5nqe-1766128959602.webp';

const subjects = [
  { name: 'Mathematics', icon: mathIconUrl, to: '/subjects', color: 'bg-blue-100', textColor: 'text-blue-800' },
  { name: 'English', icon: englishIconUrl, to: '/subjects', color: 'bg-red-100', textColor: 'text-red-800' },
  { name: 'General Science', icon: scienceIconUrl, to: '/subjects', color: 'bg-green-100', textColor: 'text-green-800' },
];

const FeatureCard = ({ title, description, emoji }: { title: string, description: string, emoji: string }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg-soft text-center transform transition-transform duration-300 hover:-translate-y-2">
        <img src={`https://emojicdn.elk.sh/${emoji}`} alt={title} className="w-20 h-20 mx-auto mb-4" />
        <h3 className="text-2xl font-bold font-heading text-brand-dark mb-2">{title}</h3>
        <p className="text-gray-500 font-sans">{description}</p>
    </div>
);

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="bg-brand-light py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-heading text-brand-primary leading-tight">
                Welcome to Funversity!
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-brand-dark font-sans max-w-xl mx-auto md:mx-0">
                Your amazing learning adventure starts right here. Let's explore, play, and grow together!
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <CatchyButton asChild size="lg" variant="primary">
                  <Link to="/subjects">Explore Subjects <ArrowRight className="ml-2" /></Link>
                </CatchyButton>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={mascotUrl} alt="Leo the Lion Mascot" className="w-64 md:w-96 drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-brand-dark text-center mb-12">What do you want to learn today?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {subjects.map((subject) => (
              <Link key={subject.name} to={subject.to} className={`group block rounded-3xl p-6 text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl-soft ${subject.color}`}>
                  <img src={subject.icon} alt={`${subject.name} icon`} className="w-28 h-28 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className={`text-3xl font-bold font-heading ${subject.textColor}`}>{subject.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Coming Soon Features Section */}
       <div className="bg-brand-bg py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading text-brand-dark text-center mb-12">More Fun is on the Way!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard title="Interactive Lessons" description="Engaging video and audio lessons." emoji="🎬" />
                <FeatureCard title="Games & Quizzes" description="Play fun games to test your knowledge." emoji="🎮" />
                <FeatureCard title="Your Own Avatar" description="Create a cool profile avatar." emoji="🧑‍🎨" />
                <FeatureCard title="Track Progress" description="Earn badges and see how you grow." emoji="🌟" />
            </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;

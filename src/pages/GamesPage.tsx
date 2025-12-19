import PageLayout from '@/components/layout/PageLayout';
import { Link } from 'react-router-dom';

const games = [
    { name: 'Math Blaster', description: 'Blast asteroids with your math skills!', emoji: '🚀', to: '/quiz' },
    { name: 'Word Finder', description: 'Find hidden words in a fun puzzle.', emoji: '🧩', to: '/quiz' },
    { name: 'Science Explorer', description: 'Explore the world of science.', emoji: '🔬', to: '/quiz' },
];

const GameCard = ({ name, description, emoji, to }: { name: string, description: string, emoji: string, to: string }) => (
    <Link to={to} className="group block bg-white p-6 rounded-2xl shadow-lg-soft text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl-soft">
        <img src={`https://emojicdn.elk.sh/${emoji}`} alt={name} className="w-24 h-24 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-2xl font-bold font-heading text-brand-dark mb-2">{name}</h3>
        <p className="text-gray-500 font-sans">{description}</p>
    </Link>
);

const GamesPage = () => {
    return (
        <PageLayout title="Games & Quizzes">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game, index) => (
                    <GameCard key={index} {...game} />
                ))}
            </div>
        </PageLayout>
    );
};

export default GamesPage;
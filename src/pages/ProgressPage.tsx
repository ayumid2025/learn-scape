import PageLayout from '@/components/layout/PageLayout';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const achievements = [
  { name: 'Math Magician', subject: 'Mathematics', emoji: '🧙‍♂️', unlocked: true },
  { name: 'Word Weaver', subject: 'English', emoji: '✍️', unlocked: true },
  { name: 'Science Explorer', subject: 'Science', emoji: '🔭', unlocked: false },
  { name: 'History Buff', subject: 'Social Studies', emoji: '📜', unlocked: true },
  { name: 'Creative Canvas', subject: 'Arts & Music', emoji: '🖼️', unlocked: false },
  { name: 'Code Commander', subject: 'Coding', emoji: '🤖', unlocked: true },
];

const AchievementBadge = ({ achievement }) => (
  <div className={`text-center p-4 rounded-lg ${achievement.unlocked ? 'bg-green-100' : 'bg-gray-200'}`}>
    <div className={`text-5xl ${achievement.unlocked ? '' : 'opacity-30'}`}>{achievement.emoji}</div>
    <p className={`font-bold mt-2 font-fredoka ${achievement.unlocked ? 'text-green-800' : 'text-gray-500'}`}>
      {achievement.name}
    </p>
    <p className="text-sm text-gray-500 font-sans">{achievement.subject}</p>
  </div>
);

const ProgressPage = () => (
  <PageLayout title="My Progress & Achievements">
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold font-fredoka text-brand-dark mb-4">My Badges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {achievements.map((ach) => (
            <AchievementBadge key={ach.name} achievement={ach} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold font-fredoka text-brand-dark mb-4">Subject Mastery</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold font-sans text-blue-700">Mathematics</span>
              <span className="text-sm font-sans text-gray-600">Level 5 - 75%</span>
            </div>
            <Progress value={75} className="w-full bg-blue-200 [&>*]:bg-blue-500" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold font-sans text-orange-700">English</span>
              <span className="text-sm font-sans text-gray-600">Level 4 - 50%</span>
            </div>
            <Progress value={50} className="w-full bg-orange-200 [&>*]:bg-orange-500" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold font-sans text-pink-700">Coding & STEM</span>
              <span className="text-sm font-sans text-gray-600">Level 8 - 90%</span>
            </div>
            <Progress value={90} className="w-full bg-pink-200 [&>*]:bg-pink-500" />
          </div>
        </div>
      </div>

      <div className="text-center bg-yellow-100 p-6 rounded-lg">
        <h3 className="text-2xl font-bold font-fredoka text-yellow-800">You have 1,250 Points! ✨</h3>
        <p className="text-yellow-700 font-sans mt-2">Visit the Rewards Shop to unlock cool new items for your avatar!</p>
      </div>
    </div>
  </PageLayout>
);

export default ProgressPage;

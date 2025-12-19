import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { CatchyButton } from '@/components/custom/CatchyButton';

const avatars = ['🦁', '🐵', '🦄', '🐼', '🦊', '🐸', '🐨', '🦉'];
const unlockableItems = [
  { name: 'Wizard Hat', emoji: '🧙', cost: 500, unlocked: true },
  { name: 'Superhero Cape', emoji: '🦸', cost: 1000, unlocked: false },
  { name: 'Crown', emoji: '👑', cost: 2500, unlocked: false },
  { name: 'Star Glasses', emoji: '🌟', cost: 750, unlocked: true },
];

const AvatarChoice = ({ avatar, isSelected, onSelect }) => (
  <CatchyButton
    variant="default"
    size="icon"
    onClick={() => onSelect(avatar)}
    className={`text-4xl transition-all duration-200 transform hover:scale-110 active:scale-95 ${isSelected ? 'bg-yellow-300 scale-110 ring-4 ring-yellow-500' : 'bg-gray-200 hover:bg-gray-300'}`}
  >
    {avatar}
  </CatchyButton>
);

const RewardItem = ({ item }) => (
  <div className={`p-4 rounded-lg flex flex-col items-center text-center transition-all duration-200 ${item.unlocked ? 'bg-green-100' : 'bg-gray-100 shadow-inner'}`}>
    <div className={`text-5xl mb-2 ${item.unlocked ? '' : 'opacity-40'}`}>{item.emoji}</div>
    <p className="font-bold font-fredoka mt-2">{item.name}</p>
    {item.unlocked ? (
      <p className="text-sm font-bold text-green-600 font-sans">Unlocked!</p>
    ) : (
      <CatchyButton 
        variant="secondary" 
        size="sm" 
        className="mt-2 w-full"
        onClick={() => alert(`Unlocking ${item.name} is coming soon!`)}
      >
        {item.cost} Points
      </CatchyButton>
    )}
  </div>
);

const ProfilePage = () => {
  const [selectedAvatar, setSelectedAvatar] = React.useState('🦁');

  return (
    <PageLayout title="My Profile & Rewards">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold font-fredoka text-brand-dark mb-4">My Avatar</h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg-soft flex flex-col items-center">
            <div className="w-48 h-48 bg-blue-200 rounded-full flex items-center justify-center text-8xl mb-6 shadow-inner">
              {selectedAvatar}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {avatars.map((avatar) => (
                <AvatarChoice
                  key={avatar}
                  avatar={avatar}
                  isSelected={selectedAvatar === avatar}
                  onSelect={setSelectedAvatar}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold font-fredoka text-brand-dark mb-4">Rewards Shop</h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg-soft">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {unlockableItems.map((item) => (
                <RewardItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
import PortalPage from '@/components/layout/PortalPage';

const FamilyPortal = () => {
  const features = [
    { name: 'Weekly Progress', icon: '📈', description: 'See your child\'s learning journey.' },
    { name: 'Activity Suggestions', icon: '💡', description: 'Fun activities to do together.' },
    { name: 'Milestone Alerts', icon: '🎉', description: 'Celebrate every achievement.' },
    { name: 'Family Challenges', icon: '👨‍👩‍👧‍👦', description: 'Learn and play as a family.' },
  ];

  return (
    <PortalPage
      title="Family Portal"
      subtitle="Stay connected with your child\'s education."
      features={features}
    />
  );
};

export default FamilyPortal;

import PortalPage from '@/components/layout/PortalPage';

const TeacherPortal = () => {
  const features = [
    { name: 'Class Management', icon: '👨‍🏫', description: 'Organize classes and students.' },
    { name: 'Lesson Assigner', icon: '📝', description: 'Assign lessons and track completion.' },
    { name: 'Performance Tracker', icon: '📊', description: 'View student progress and insights.' },
    { name: 'Printable Reports', icon: '📄', description: 'Generate and print student reports.' },
  ];

  return (
    <PortalPage
      title="Teacher Portal"
      subtitle="Your command center for classroom success."
      features={features}
    />
  );
};

export default TeacherPortal;

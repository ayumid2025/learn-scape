import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { CatchyButton } from '@/components/custom/CatchyButton';
import { GraduationCap, Users } from 'lucide-react';

const PortalCard = ({ to, title, description, icon, variant }) => (
  <Link to={to} className="block text-center">
    <div className="bg-white p-8 rounded-2xl shadow-lg-soft transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl-soft h-full flex flex-col justify-between">
      <div>
        <div className={`inline-block p-4 rounded-full bg-${variant}-100`}>
          {icon}
        </div>
        <h3 className="text-3xl font-bold font-heading text-brand-dark mt-4">{title}</h3>
        <p className="text-gray-500 font-sans mt-2 mb-6">{description}</p>
      </div>
      <CatchyButton variant={variant} size="lg" className="w-full">Select Portal</CatchyButton>
    </div>
  </Link>
);

const PortalSelectionPage = () => {
  return (
    <PageLayout title="Select Your Portal">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <PortalCard 
          to="/portal/teacher"
          title="Teacher Portal"
          description="Manage classes, assign lessons, and track student progress."
          icon={<GraduationCap className="w-12 h-12 text-blue-500" />}
          variant="primary"
        />
        <PortalCard 
          to="/portal/family"
          title="Family Portal"
          description="View your child's progress, achievements, and weekly activities."
          icon={<Users className="w-12 h-12 text-pink-500" />}
          variant="secondary"
        />
      </div>
    </PageLayout>
  );
};

export default PortalSelectionPage;
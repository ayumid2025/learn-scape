import PageLayout from '@/components/layout/PageLayout';

const FeatureCard = ({ feature }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className="text-4xl">{feature.icon}</div>
    <div>
      <h3 className="text-xl font-bold font-fredoka text-brand-dark">{feature.name}</h3>
      <p className="text-gray-600 font-sans">{feature.description}</p>
    </div>
  </div>
);

const PortalPage = ({ title, subtitle, features }) => (
  <PageLayout title={title}>
    <p className="text-center text-xl text-gray-600 mb-12 font-sans">{subtitle}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.name} feature={feature} />
      ))}
    </div>
    <div className="text-center mt-12">
        <p className="text-lg font-sans text-gray-500 mt-2">More features coming soon!</p>
    </div>
  </PageLayout>
);

export default PortalPage;

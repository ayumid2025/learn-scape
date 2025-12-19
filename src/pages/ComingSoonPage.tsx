import PageLayout from '@/components/layout/PageLayout';

const ComingSoonPage = ({ title }: { title: string }) => (
  <PageLayout title={title}>
    <div className="text-center">
      <img src="https://emojicdn.elk.sh/🚧" alt="Under Construction" className="w-24 h-24 mx-auto mb-4" />
      <p className="text-2xl font-sans text-brand-dark">This page is under construction!</p>
      <p className="text-lg font-sans text-gray-500 mt-2">We're working hard to bring you more fun learning experiences.</p>
    </div>
  </PageLayout>
);

export default ComingSoonPage;
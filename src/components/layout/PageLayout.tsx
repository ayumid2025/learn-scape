import React from 'react';

const PageLayout = ({ title, children, fullWidth = false }: { title: string, children: React.ReactNode, fullWidth?: boolean }) => {
  return (
    <div className={`py-8 md:py-12 ${fullWidth ? '' : 'container mx-auto px-4 sm:px-6 lg:px-8'}`}>
      <h1 className="text-4xl md:text-5xl font-heading text-brand-dark text-center mb-8 md:mb-12">{title}</h1>
      {children}
    </div>
  );
};

export default PageLayout;
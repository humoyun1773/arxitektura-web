import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { PopularCourses } from '../components/home/PopularCourses';
import { MentorsPreview } from '../components/home/MentorsPreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { PartnersSection } from '../components/home/PartnersSection';
import { CtaBanner } from '../components/home/CtaBanner';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4">
      <HeroSlider onNavigate={onNavigate} />
      <StatsSection />
      <PopularCourses onNavigate={onNavigate} />
      <FeaturesSection />
      <MentorsPreview onNavigate={onNavigate} />
      <PartnersSection />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
};

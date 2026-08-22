import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { StatsSection } from '../components/home/StatsSection';
import { PopularCourses } from '../components/home/PopularCourses';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { ProjectCalculator } from '../components/home/ProjectCalculator';
import { MentorsPreview } from '../components/home/MentorsPreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CtaBanner } from '../components/home/CtaBanner';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 animate-page-entrance">
      <HeroSlider onNavigate={onNavigate} />
      <StatsSection />
      <PopularCourses onNavigate={onNavigate} />
      <ProjectCalculator onNavigate={onNavigate} />
      <FeaturesSection />
      <MentorsPreview onNavigate={onNavigate} />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
};

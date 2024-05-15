import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SkillCard from './SkillCard';

const TechSection = ({ onNext }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.skills-section', { duration: 1, opacity: 1 });

    setTimeout(() => {
      onNext();
    }, 5000);
  }, [onNext]);

  return (
    <div className="absolute text-white text-3xl font-bold flex flex-col font-spaceGrotesk">
      <h2 className="text-6xl font-bold">Technologies</h2>
      <SkillCard iconClass="bi bi-check2-circle" title="ReactJS" />
      <SkillCard iconClass="bi bi-check2-circle" title="GSAP" />
      <SkillCard iconClass="bi bi-check2-circle" title="Google Looker" />
    </div>
  );
};

export default TechSection;

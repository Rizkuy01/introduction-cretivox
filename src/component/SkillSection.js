import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SkillCard from './SkillCard';

const SkillsSection = ({ onNext }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.skills-section', { duration: 1, opacity: 1 });

    setTimeout(() => {
      onNext();
    }, 5000);S
  }, [onNext]);

  return (
    <div className="absolute text-white text-3xl font-bold flex flex-col font-spaceGrotesk">
      <h2 className="text-6xl font-bold">Professional Skills</h2>
      <SkillCard iconClass="bi-globe" title="Website Development" />
      <SkillCard iconClass="bi-gear-wide-connected" title="Information System's" />
      <SkillCard iconClass="bi-database-fill-check" title="Database Administration" />
    </div>
  );
};

export default SkillsSection;

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Welcome from './component/Welcome';
import ProfileCard from './component/ProfileCard';
import Introduction from './component/Introduction';
import SkillsSection from './component/SkillSection';
import TechnologiesSection from './component/TechnologySection';
import HireMe from './component/HireMe';
import './index.css';

function App() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to('.welcome-text', { duration: 1, opacity: 1, stagger: 0.5 })
      .to('.welcome-text', { duration: 1, opacity: 0, delay: 1 })
      .to('.profile-card', { duration: 1, opacity: 1, y: 0 })
      .to('.profile-card', { duration: 1, x: -200 })
      .to('.introduction', { duration: 1, opacity: 1 })
      .to('.introduction', { duration: 1, opacity: 0, delay: 3})
      .to('.skills', { duration: 1, opacity: 0, delay: 1 })
      .to('.profile-card', { duration: 1, opacity: 0, delay: 1, onComplete: () => setStage(1) });

  }, []);

  useEffect(() => {
    if (stage === 1) {
      const tl = gsap.timeline();
      tl.to('.profile-card', { duration: 1, x: -500, opacity: 0 })
        .to('.introduction', { duration: 1, x: 500, opacity: 0 }, '-=1')
        .to('.skills-section', { duration: 1, opacity: 1 });
    } else if (stage === 2) {
      const tl = gsap.timeline();
      tl.to('.skills-section', { duration: 1, opacity: 0, x: -500 })
        .to('.technologies-section', { duration: 1, opacity: 1 });
    } else if (stage === 3) {
      const tl = gsap.timeline();
      tl.to('.technologies-section', { duration: 1, opacity: 0, x: -500 })
        .to('.hire-me', { duration: 1, opacity: 1 });
    }
  }, [stage]);

  return (
    <div className="App flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      {stage === 0 && (
        <>
          <Welcome />
          <ProfileCard />
          <Introduction />
        </>
      )}
      {stage === 1 && (
        <SkillsSection onNext={() => setStage(2)} />
      )}
      {stage === 2 && (
        <TechnologiesSection onNext={() => setStage(3)} />
      )}
      {stage === 3 && (
        <HireMe />
      )}
    </div>
  );
}

export default App;

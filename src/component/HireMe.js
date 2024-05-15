import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HireMe = () => {
  useEffect(() => {
    gsap.to('.hire-me', { duration: 1, opacity: 1, scale: 1.2, repeat: -1, yoyo: true });
  }, []);

  return (
    <div className="hire-me text-white text-4xl font-bold opacity-0 font-spaceGrotesk">
      HIRE ME
    </div>
  );
};

export default HireMe;

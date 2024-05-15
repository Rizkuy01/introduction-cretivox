import React from 'react';

const SkillCard = ({ iconClass, title }) => {
  return (
    <div className="skills flex items-center mb-4 font-spaceGrotesk">
        <div className="bg-primary bg-gradient-to-r from-primary to-secondary text-white rounded-3 me-3 p-3">
        <i className={`bi ${iconClass}`}></i>
        </div>
        <h5 className="fw-bolder mb-0 text-sm">
        <span className="text-gradient d-inline">{title}</span>
        </h5>
    </div>
  

  );
};

export default SkillCard;

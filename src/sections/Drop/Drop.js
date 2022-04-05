import React, { useState } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

import './Drop.styles.scss'

const Drop = ({ title, content }) => {
   const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        {title}
        <span>{isActive ? <VscChevronUp/> : <VscChevronDown/>}</span>
        
      </div>
      <hr/>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Drop;
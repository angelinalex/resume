import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, tooltipText }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="tooltip-container"
         onMouseOver={() => setShow(true)}
         onMouseOut={() => setShow(false)}>
      {text}
      {show && <div className="tooltip-text">{tooltipText}</div>}
    </div>
  );
};

export default Tooltip;

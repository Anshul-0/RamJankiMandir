import React from 'react';
import './PageHeader.css';

const PageHeader = ({ eyebrow, title, titleHighlight, intro, containerClass = '' }) => {
  return (
    <div className={`page-header ${containerClass}`}>
      <span className="page-eyebrow">{eyebrow}</span>
      <h1 className="page-title">
        {title} {titleHighlight && <span>{titleHighlight}</span>}
      </h1>
      {intro && <p className="page-intro">{intro}</p>}
    </div>
  );
};

export default PageHeader;

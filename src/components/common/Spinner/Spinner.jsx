import React from 'react';
import './Spinner.css';

const Spinner = ({ style }) => {
  return (
    <div className="lds-css ng-scope center">
      <div className="lds-double-ring" style={style}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;

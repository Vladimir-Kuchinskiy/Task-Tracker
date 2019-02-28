import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-css ng-scope center">
      <div className="lds-double-ring">
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;

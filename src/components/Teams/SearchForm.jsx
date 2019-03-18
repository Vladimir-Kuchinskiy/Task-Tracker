import React from 'react';
import PropTypes from 'prop-types';

const SeaarchForm = ({ onChange }) => {
  return (
    <div className="row">
      <div className="col-4">
        <form action="" onSubmit={e => e.preventDefault()}>
          <input onChange={onChange} type="text" className="form-control" placeholder="Search..." />
        </form>
      </div>
    </div>
  );
};

SeaarchForm.propTypes = {
  onChange: PropTypes.func
};

export default SeaarchForm;

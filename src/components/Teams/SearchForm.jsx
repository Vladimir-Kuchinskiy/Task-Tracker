import React from 'react';

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

export default SeaarchForm;

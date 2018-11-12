import React from "react";

const AddList = ({ onClick }) => {
  return (
    <div className="btn btn-outline-warning add-list" onClick={onClick}>
      Add List
    </div>
  );
};

export default AddList;

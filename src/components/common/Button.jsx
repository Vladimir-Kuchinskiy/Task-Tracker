import React from "react";

const Button = ({ onClick, classes, title, id }) => {
  return (
    <div className={classes} onClick={onClick} id={id}>
      {title}
    </div>
  );
};

export default Button;

import React from "react";

const Button = ({ onClick, classes, title }) => {
  return (
    <div className={classes} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;

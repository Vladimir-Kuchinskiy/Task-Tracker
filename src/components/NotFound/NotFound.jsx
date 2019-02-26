import React from 'react';
import Button from '../common/Button';
import './NotFound.css';

const NotFound = props => {
  const image = (
    <img
      className="d-flex justify-content-center not-found"
      src={require('./error-404.png')}
      alt=""
    />
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-2" />
        <div className="col-8">
          {image}
          <Button
            title="Go Back"
            classes="btn btn-danger go-back"
            onClick={() => {
              props.history.goBack();
            }}
          />
        </div>
        <div className="col-2" />
      </div>
    </div>
  );
};

export default NotFound;

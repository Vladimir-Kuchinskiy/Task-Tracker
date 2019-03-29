import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import Button from '../common/Button';

const Membership = () => {
  return (
    <React.Fragment>
      <h2 className="row">Membership</h2>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-5">
          <Card>
            <img
              className="card-img-top"
              src={require('../../images/download.png')}
              alt="Card cap"
            />
            <CardBody>
              <CardTitle style={{ fontSize: '1.5em' }}>Task Tracker membership</CardTitle>
              <CardSubtitle style={{ fontSize: '1.3em' }}>Price: 5$ per month</CardSubtitle>
              <CardText style={{ color: 'black' }}>
                Become our member and you will be able to create your own teams, create team boards
                and create your personal boards without any limits.
              </CardText>
              <Button title="Get Membership" classes="btn btn-primary" onClick={() => {}} />
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Membership;

import React, { useEffect } from 'react';
import DropIn from 'braintree-web-drop-in-react';

import Spinner from '../../common/Spinner';
import Button from '../../common/Button';

const MembershipBraintreeDropin = ({ authToken, ...props }) => {
  useEffect(() => {
    const { getClientToken } = props;
    getClientToken(authToken);
  }, []);

  const handleClick = () => {
    const { buyMembership, instance, onModalClose } = props;
    buyMembership(instance, authToken).then(() => {
      onModalClose();
    });
  };

  const { clientToken, setInstance, loading } = props;
  if (loading) {
    return <Spinner style={{ marginLeft: '45%' }} />;
  } else {
    return (
      <div>
        <DropIn
          options={{ authorization: clientToken }}
          onInstance={instance => setInstance(instance)}
        />
        <div style={{ textAlign: 'center' }}>
          <Button title="Buy Membership" classes="btn btn-outline-success" onClick={handleClick} />
        </div>
      </div>
    );
  }
};

export default MembershipBraintreeDropin;

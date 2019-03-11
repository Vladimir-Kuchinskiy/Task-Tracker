import React, { useEffect } from 'react';
import Person from './Person';

const AddMember = ({ findedUserEmails, searchUsers }) => {
  useEffect(() => {
    return () => searchUsers('');
  }, []);

  const handleSearch = e => {
    searchUsers(e.target.value);
  };

  return (
    <React.Fragment>
      <tr>
        <td>
          <h5 className="invite-title">Invite new member</h5>
          <div className="row">
            <div className="col-4">
              <form action="">
                <input
                  onChange={handleSearch}
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
        </td>
      </tr>
      {findedUserEmails.map((email, index) => (
        <Person email={email} invitable key={index} />
      ))}
    </React.Fragment>
  );
};

export default AddMember;

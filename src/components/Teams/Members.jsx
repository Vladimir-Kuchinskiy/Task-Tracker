import React from 'react';
import Person from './Person';
import AddMember from '../../containers/AddMember';
import './styles/Members.css';

const Members = ({ members }) => {
  return (
    <div>
      <h2 className="row">
        Team members &nbsp;
        <span className="badge badge-pill badge-dark">{members.length}</span>
      </h2>
      <table className="table members-table">
        <tbody>
          {members.map(member => (
            <Person email={member.email} key={member.id} />
          ))}
          <AddMember />
        </tbody>
      </table>
    </div>
  );
};

export default Members;

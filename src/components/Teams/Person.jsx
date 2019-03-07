import React, { useState } from 'react';
import './styles/Member.css';

const Person = ({ email, invitable }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const handleMouseOver = e => {
    if (e.relatedTarget && e.relatedTarget.className.includes('btn')) return;

    setMouseOver(false);
  };
  const header = invitable ? <h6 className="mt-4">{email}</h6> : <h5 className="mt-3">{email}</h5>;
  const avatar = require(`../../images/avatar-placeholder.png`);

  const inviteButton =
    invitable && mouseOver ? (
      <div className="btn btn-success mt-3" onMouseOver={() => setMouseOver(false)}>
        + Invite member
      </div>
    ) : null;

  return (
    <tr onMouseOver={() => setMouseOver(true)} onMouseOut={handleMouseOver}>
      <td>
        <div className="media">
          <img src={avatar} alt="" />
          <div className="media-body member-body">{header}</div>
          {inviteButton}
        </div>
      </td>
    </tr>
  );
};

export default Person;

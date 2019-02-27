import React, { useState } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import EditListForm from './EditListForm';
import './styles/ListHeader.css';

const ListHeader = ({ dragHandleProps, title, listId, authToken, deleteList }) => {
  const [editList, setEditList] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const popover = (
    <Popover
      placement="bottom"
      isOpen={showPopover}
      target={`PopoverList${listId}`}
      toggle={() => setShowPopover(!showPopover)}
      className="list-popover"
    >
      <PopoverBody>
        <div className="toolbar-item" onClick={() => deleteList(listId, authToken)}>
          <div>Delete list...</div>
          <img className="pull-right" src={require('../../../images/delete.png')} alt="" />
        </div>
      </PopoverBody>
    </Popover>
  );

  const headerTitle = editList ? (
    <EditListForm
      value="title"
      form={`EditListForm-${listId}`}
      listId={listId}
      initialValues={{ title }}
      onEdit={() => setEditList(!editList)}
    />
  ) : (
    <div onClick={() => setEditList(!editList)}>{title}</div>
  );

  const headerToolbar = (
    <div
      className="header-toolbar"
      id={`PopoverList${listId}`}
      onClick={() => setShowPopover(!showPopover)}
    >
      <img src={require('../../../images/toolbar.png')} alt="" />
    </div>
  );

  return (
    <header {...dragHandleProps}>
      <div className="header-title">{headerTitle}</div>
      {headerToolbar}
      {popover}
    </header>
  );
};

export default ListHeader;

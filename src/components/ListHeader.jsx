import React from "react";
import { Popover, PopoverBody } from "reactstrap";
import EditForm from "./forms/EditForm";

const ListHeader = ({
  dragHandleProps,
  showPopover,
  data,
  list,
  editListClicked,
  handleClick,
  handleChange,
  handleSubmit,
  handleDelete,
  togglePopover
}) => {
  return (
    <header {...dragHandleProps}>
      <div className="header-title" onClick={handleClick}>
        {editListClicked ? (
          <EditForm
            data={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            value="title"
          />
        ) : (
          list.title
        )}
      </div>
      <div
        className="header-toolbar"
        id={`PopoverList${list.id}`}
        onClick={togglePopover}
      >
        <img src={require("../images/toolbar.png")} alt="" />
      </div>
      <Popover
        placement="bottom"
        isOpen={showPopover}
        target={`PopoverList${list.id}`}
        toggle={togglePopover}
        className="list-popover"
      >
        <PopoverBody>
          <div className="toolbar-item" onClick={() => handleDelete(list)}>
            <div className="delete-list-inline">Delete list...</div>
            <img
              className="delete-list-inline pull-right delete-icon"
              src={require("../images/delete.png")}
              alt=""
            />
          </div>
        </PopoverBody>
      </Popover>
    </header>
  );
};

export default ListHeader;

import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Button from '../common/Button';

class DeleteBoard extends Component {
  onClick = () => {
    const { params, authToken, deleteBoard, history } = this.props;
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you shure you want to delete this board ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.value) {
        const { id, teamId } = params;
        deleteBoard(id, teamId, authToken);
        const redirectPath = '/dashboard' + (teamId ? `/teams/${teamId}/boards` : '/boards');
        return history.push(redirectPath);
      }
    });
  };

  render() {
    return (
      this.props.isCreator && (
        <Button
          classes="btn btn-danger pull-right mb-2"
          title="Delete board"
          onClick={this.onClick}
        />
      )
    );
  }
}

export default DeleteBoard;

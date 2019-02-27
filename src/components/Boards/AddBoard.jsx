import React, { useState } from 'react';
import NewBoardForm from './NewBoardForm';
import AddBoardButton from './AddBoardButton';
import './styles/AddBoard.css';

const AddBoard = () => {
  const [showNew, setShowNew] = useState(false);

  const content = showNew ? (
    <NewBoardForm onClose={() => setShowNew(!showNew)} />
  ) : (
    <AddBoardButton toggleShowNew={() => setShowNew(!showNew)} />
  );

  return content;
};

export default AddBoard;

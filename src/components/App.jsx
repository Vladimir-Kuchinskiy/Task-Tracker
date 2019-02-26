import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import NavBar from '../containers/NavBar';
import Routes from '../containers/Routes';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div className="container-relative ui">
        <NavBar />
        <ToastContainer />
        <Routes />
      </div>
    </Router>
  );
};

export default App;

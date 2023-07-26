import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import {connect} from 'react-redux';
import {checkAuthenticated, load_user, googleAuthenticate} from '../actions/auth'

const Layout = ({ checkAuthenticated, load_user, children }) => {

  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated, load_user]);

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default connect(null, {checkAuthenticated, load_user, googleAuthenticate})(Layout);
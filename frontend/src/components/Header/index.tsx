/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'store/slices/auth';

const Header: React.FC<{ classes: any }> = ({ classes }) => {
  const state = useSelector((store: { auth: any; }) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    dispatch(logout(null));
    // window.location.reload();
  };
  return (
    <div className={classes.header}>
      <Link to="/"><img src="/icons/logo_low.png" alt="dragon-ball-icon" className={classes.img} /></Link>
      <div className="flex flex-1 justify-center  text-white">
        <h2 className="font-semibold text-2xl">Movie App</h2>
        <ul className="flex w-3/4 justify-end text-center">
          <li className="mx-8"><Link to="/all-movies">All Movies</Link></li>
          {
            state.user && state.user.id
              ? (
                <li><button onClick={handleLogout}>Logout</button></li>
              )
              : (
                <li><Link to="/login">Login</Link></li>

              )
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;

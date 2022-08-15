/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Footer } from 'components';
import {
  Outlet, Link, Navigate, useNavigate,
} from 'react-router-dom';

export const Layout = () => {
  const styles = {
    header: 'bg-yellow py-2 pl-9 flex justify-between items-center',
    img: 'h-24',
    footer: 'bg-dark-blue h-10',
  };
  return (
    <div className="relative h-screen">
      <Header classes={styles} />
      <div className="min-h-screen  md:w-10/12 mx-auto py-2">
        <Outlet />
      </div>
      <Footer classes={styles} />
    </div>
  );
};

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { findLastIndex } from 'lodash';
import firebase from '../firebase';
import Navbar from './Navbar';
import VerticalTab from './VerticalTab';
import '../views/Dashboard.css';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <h3>
          Welcome Back,
          <br />
          Jaquisha!
        </h3>
        <VerticalTab />
      </div>
    </div>
  );
}

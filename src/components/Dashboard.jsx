import React from 'react';
import '../views/Dashboard.css';
import Navbar from './Navbar';

const Dashboard = () => (
  <>
    <Navbar />
    <div className="dashboard">
      <h1> Dashboard </h1>
      <p> My saved trips </p>
    </div>
  </ >
);

export default Dashboard;

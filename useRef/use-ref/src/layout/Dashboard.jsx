import React from "react";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Analytics</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome Back!</h1>
          <p>Here's a quick overview of your account.</p>
          <Outlet />
        </header>

     
      </main>
    </div>
  );
};

export default Dashboard;

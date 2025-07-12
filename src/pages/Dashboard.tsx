import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';

const Dashboard: React.FC = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      {isAuthenticated ? (
        <div className="dashboard-card">
          <p className="welcome">Welcome, {user?.email}</p>
          <h1 className="dashboard-title">Task Dashboard</h1>
          <TaskForm />
          <TaskList />
          <button
            className="logout-btn"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      ) : (
        <p>Please log in to access your tasks.</p>
      )}
    </div>
  );
};

export default Dashboard;

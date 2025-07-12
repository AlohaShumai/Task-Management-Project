import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

const TaskDetails: React.FC = () => {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext)!;

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? '✅ Completed' : '❌ Incomplete'}</p>
      <Link to="/">← Back to Dashboard</Link>
    </div>
  );
};

export default TaskDetails;

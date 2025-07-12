import React, { useContext } from 'react';
import type { Task } from '../Types/Index';
import { TaskContext } from '../Context/TaskContext';
import { Link } from 'react-router-dom';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { deleteTask, setEditingTask, toggleTaskCompletion } = useContext(TaskContext)!;

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <Link to={`/task/${task.id}`}>
        <h3 style={{ display: 'inline', marginLeft: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </h3>
      </Link>
      <p>{task.description}</p>
      <button onClick={() => setEditingTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;

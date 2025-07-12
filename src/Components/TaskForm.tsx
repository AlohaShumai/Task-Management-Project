import React, { useState, useContext } from 'react';
import type { FormEvent } from 'react';
import type { Task } from '../Types/Index';
import { TaskContext } from '../Context/TaskContext';
import { toast } from 'react-toastify';

const TaskForm: React.FC = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('TaskForm must be used within a TaskProvider');
  }

  const { addTask, editingTask, updateTask, clearEditingTask } = context;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  React.useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error('Title is required!');
      return;
    }

    const taskData: Task = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      title,
      description,
      completed: editingTask ? editingTask.completed : false,
    };

    if (editingTask) {
      updateTask(taskData);
      toast.info('Task updated!');
    } else {
      addTask(taskData);
      toast.success('Task added!');
    }

    setTitle('');
    setDescription('');
    clearEditingTask?.(); 
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;

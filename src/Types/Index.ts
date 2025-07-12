export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};


export type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
  editingTask: Task | null;
  setEditingTask: (task: Task | null) => void;
  updateTask: (task: Task) => void;
  clearEditingTask: () => void;
};

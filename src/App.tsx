import React, { useState } from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import EditTaskPage from "./components/EditTaskPage";
import "./App.css";

interface TaskItem {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [editingTask, setEditingTask] = useState<TaskItem | null>(null);
  const [isCreatingTask, setIsCreatingTask] = useState<boolean>(false);

  const addTask = (text: string) => {
    const newTask: TaskItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsCreatingTask(false);
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id: number, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditClick = (task: TaskItem) => {
    setEditingTask(task);
  };

  const handleSaveEdit = (newText: string) => {
    if (editingTask) {
      editTask(editingTask.id, newText);
      setEditingTask(null);
    }
  };

  const handleDelete = () => {
    if (editingTask) {
      deleteTask(editingTask.id);
      setEditingTask(null); // Close the edit page after deleting
    }
  };

  return (
    <div className="flex border-none max-w-3xl h-[40rem] gap-3 lg:gap-0 flex-col lg:flex-row rounded-xl  mx-auto ">
      <div
        className="lg:w-[40%] shadow-xl  "
        style={{ boxShadow: "16px 0px 11px -20px rgba(0,0,0,0.45)" }}
      >
        <div
          className="bg-[#3556AB]"
          style={{ borderRight: "1px solid rgba(0,0,0,0.45)" }}
        >
          <div className="flex gap-4 py-5 pl-4 pr-5 ">
            <div>
              {" "}
              <img src="/man-pic.svg" alt="man" />
            </div>
            <div className="text-start text-[#fff] w-[50%] ">
              <h2 className="text-[11px]">Hello John</h2>
              <p
                className=" text-[13px] font-[200] tracking-[1px] opacity-[60%] pt-1"
                style={{ fontStyle: "italic" }}
              >
                What are your plans for today ?
              </p>
            </div>
          </div>
          <div
            className="bg-[#CDE53D] relative flex gap-5 py-7 pl-5 items-center"
            style={{}}
          >
            <img src="cup.svg" alt="cup" />
            <p className="text-[#071D55] font-semibold text-[14px]">
              Go Pro Upgrade Now
            </p>
            <div className="w-10 h-10 bg-[#071D55] flex items-center justify-center absolute top-0 right-[15px]">
              <span className="text-[10px] text-[#F2C94C] font-bold">$1</span>
            </div>
          </div>
        </div>

        <div className="pt-4 h-[27.5rem] relative bg-[#f3f3f3]">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
              onEditClick={() => handleEditClick(task)}
            />
          ))}
          {isCreatingTask && <TaskInput onAddTask={addTask} />}
          <button
            className="bottom-[15px] absolute right-4 rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center"
            onClick={() => setIsCreatingTask(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:w-[60%]">
        <div className="bg-[#3556AB] py-[2.38rem] text-center">
          <h1 className="text-center text-[#fff] ">Edit Task</h1>
        </div>
        <div className="bg-[#f3f3f3] lg:h-[33.7rem] ml-1">
          <h2 className="text-[13px] tracking-[1px] font-[500] mb-4 text-start pt-2 px-5">
            Task Name
          </h2>
          {editingTask && (
            <EditTaskPage
              task={editingTask}
              onSave={handleSaveEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

// interface TaskItem {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const App: React.FC = () => {
//   const [tasks, setTasks] = useState<TaskItem[]>([]);

//   const addTask = (text: string) => {
//     const newTask: TaskItem = {
//       id: Date.now(),
//       text,
//       completed: false,
//     };
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   };

//   const toggleTask = (id: number) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const editTask = (id: number, newText: string) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, text: newText } : task
//       )
//     );
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
//       <TaskInput onAddTask={addTask} />
//       <div className="mt-4">
//         {tasks.map((task) => (
//           <Task
//             key={task.id}
//             task={task}
//             onToggle={() => toggleTask(task.id)}
//             onEdit={(newText: string) => editTask(task.id, newText)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import Task from "./components/Task";
// import TaskInput from "./components/TaskInput";
// import EditTaskPage from "./components/EditTaskPage";
// import "./App.css";

// interface TaskItem {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const App: React.FC = () => {
//   const [tasks, setTasks] = useState<TaskItem[]>([]);
//   const [editingTask, setEditingTask] = useState<TaskItem | null>(null);

//   const addTask = (text: string) => {
//     const newTask: TaskItem = {
//       id: Date.now(),
//       text: text,
//       completed: false,
//     };
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   };

//   const toggleTask = (id: number) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const editTask = (id: number, newText: string) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, text: newText } : task
//       )
//     );
//   };

//   const deleteTask = (id: number) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
//   };

//   const handleEditClick = (task: TaskItem) => {
//     setEditingTask(task);
//   };

//   const handleSaveEdit = (newText: string) => {
//     if (editingTask) {
//       editTask(editingTask.id, newText);
//       setEditingTask(null);
//     }
//   };

//   const handleDelete = () => {
//     if (editingTask) {
//       deleteTask(editingTask.id);
//       setEditingTask(null); // Close the edit page after deleting
//     }
//   };

//   return (
//     <div className="flex border-2 border-black mx-auto mt-8">
//       <div className="w-[40%] pr-1">
//         <div className="bg-[#3556AB]">
//           <div className="flex gap-4 py-5 pl-4 pr-5 ">
//             <div>
//               {" "}
//               <img src="/man-pic.svg" alt="man" />
//             </div>
//             <div className="text-start text-[#fff] w-[40%]">
//               <h2 className="text-[10px]">Hello John</h2>
//               <p className="font-italic text-[13px]">
//                 What are your plans for today ?
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#9EB031] relative flex gap-5 py-7 pl-5 items-center">
//             <img src="cup.svg" alt="cup" />
//             <p className="text-[#071D55]">Go Pro Upgrade Now</p>
//             <div className="w-10 h-10 bg-[#071D55] flex items-center justify-center absolute top-0 right-[15px]">
//               <span className="text-sm text-[#9EB031] font-bold">$1</span>
//             </div>
//           </div>
//         </div>
//         <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
//         <TaskInput onAddTask={addTask} />
//         <div className="mt-4">
//           {tasks.map((task) => (
//             <Task
//               key={task.id}
//               task={task}
//               onToggle={() => toggleTask(task.id)}
//               onEditClick={() => handleEditClick(task)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="w-[60%] pl-1">
//         <div className="bg-[#3556AB]">
//           <div className="flex gap-4 py-5 pl-4 pr-5 ">
//             <div>
//               {" "}
//               <img src="/man-pic.svg" alt="man" />
//             </div>
//             <div className="text-start text-[#fff] w-[40%]">
//               <h2 className="text-[10px]">Hello John</h2>
//               <p className="font-italic text-[13px]">
//                 What are your plans for today ?
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#9EB031] relative flex gap-5 py-7 pl-5 items-center">
//             <img src="cup.svg" alt="cup" />
//             <p className="text-[#071D55]">Go Pro Upgrade Now</p>
//             <div className="w-10 h-10 bg-[#071D55] flex items-center justify-center absolute top-0 right-[15px]">
//               <span className="text-sm text-[#9EB031] font-bold">$1</span>
//             </div>
//           </div>
//         </div>
//         {editingTask && (
//           <EditTaskPage
//             task={editingTask}
//             onSave={handleSaveEdit}
//             onDelete={handleDelete}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

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

  const addTask = (text: string) => {
    const newTask: TaskItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
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
    <div className="flex border-2 border-black mx-auto mt-8">
      <div className="w-[40%] pr-4">
        <div className="bg-[#3556AB]">
          <div className="flex gap-4 py-5 pl-4 pr-5 ">
            <div>
              {" "}
              <img src="/man-pic.svg" alt="man" />
            </div>
            <div className="text-start text-[#fff] w-[40%]">
              <h2 className="text-[10px]">Hello John</h2>
              <p className="font-italic text-[13px]">
                What are your plans for today ?
              </p>
            </div>
          </div>
          <div className="bg-[#9EB031] relative flex gap-5 py-7 pl-5 items-center">
            <img src="cup.svg" alt="cup" />
            <p className="text-[#071D55]">Go Pro Upgrade Now</p>
            <div className="w-10 h-10 bg-[#071D55] flex items-center justify-center absolute top-0 right-[15px]">
              <span className="text-sm text-[#9EB031] font-bold">$1</span>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <TaskInput onAddTask={addTask} />
        <div className="mt-4">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
              onEditClick={() => handleEditClick(task)}
            />
          ))}
        </div>
      </div>
      <div className="w-[60%]">
        <div className="bg-[#3556AB] py-9 text-center">
          <h1 className="text-center text-[#fff] ">Edit Task</h1>
        </div>
        {editingTask && (
          <EditTaskPage
            task={editingTask}
            onSave={handleSaveEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default App;

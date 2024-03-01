// // Task.tsx
// import React, { useState } from "react";

// interface TaskProps {
//   task: {
//     id: number;
//     text: string;
//     completed: boolean;
//   };
//   onToggle: () => void;
//   onEdit: (newText: string) => void;
// }

// const Task: React.FC<TaskProps> = ({ task, onToggle, onEdit }) => {
//   const [editing, setEditing] = useState(false);
//   const [text, setText] = useState(task.text);

//   const handleToggle = () => {
//     onToggle();
//   };

//   const handleDoubleClick = () => {
//     setEditing(true);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       onEdit(text);
//       setEditing(false);
//     }
//   };

//   return (
//     <div className="flex items-center">
//       <input
//         type="checkbox"
//         checked={task.completed}
//         onChange={handleToggle}
//         className="mr-2"
//       />
//       {editing ? (
//         <input
//           type="text"
//           value={text}
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//           onBlur={() => {
//             onEdit(text);
//             setEditing(false);
//           }}
//           autoFocus
//           className="flex-1 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
//         />
//       ) : (
//         <div
//           onDoubleClick={handleDoubleClick}
//           className={`flex-1 ${
//             task.completed ? "line-through text-gray-400" : ""
//           }`}
//         >
//           {task.text}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Task;
// Task.tsx
// Task.tsx
import React from "react";

interface TaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: () => void;
  onEditClick: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggle, onEditClick }) => {
  const handleToggle = () => {
    onToggle();
  };

  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className="mr-2 h-4 w-4 text-blue-600"
      />
      <div
        className={`flex-1 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </div>
      <button
        onClick={onEditClick}
        className="px-2 py-1 rounded bg-blue-500 text-white"
      >
        Edit
      </button>
    </div>
  );
};

export default Task;

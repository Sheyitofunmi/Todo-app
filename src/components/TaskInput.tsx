// // TaskInput.tsx
// import React, { useState } from "react";

// interface TaskInputProps {
//   onAddTask: (text: string) => void;
// }

// const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
//   const [text, setText] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const trimmedText = text.trim();
//     if (trimmedText) {
//       onAddTask(trimmedText);
//       setText("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Add new task"
//         value={text}
//         onChange={handleChange}
//         className="w-full rounded p-2"
//       />
//     </form>
//   );
// };
// TaskInput.tsx
import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      onAddTask(trimmedText);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={text}
        onChange={handleChange}
        className="w-full rounded p-2"
      />
    </form>
  );
};

export default TaskInput;

// export default TaskInput;

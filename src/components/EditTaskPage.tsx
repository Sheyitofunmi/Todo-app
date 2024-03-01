// // EditTaskPage.tsx
// import React, { useState } from "react";

// interface EditTaskPageProps {
//   task: {
//     id: number;
//     text: string;
//     completed: boolean;
//   };
//   onSave: (newText: string) => void;
//   onDelete: () => void;
// }

// const EditTaskPage: React.FC<EditTaskPageProps> = ({
//   task,
//   onSave,
//   onDelete,
// }) => {
//   const [text, setText] = useState(task.text);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//   };

//   const handleSave = () => {
//     onSave(text);
//   };

//   const handleDelete = () => {
//     onDelete();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={handleChange}
//         className="w-full rounded p-2"
//       />
//       <button onClick={handleSave}>Save</button>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default EditTaskPage;
// EditTaskPage.tsx
// EditTaskPage.tsx
import React, { useState } from "react";

interface EditTaskPageProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onSave: (newText: string) => void;
  onDelete: () => void;
}

const EditTaskPage: React.FC<EditTaskPageProps> = ({
  task,
  onSave,
  onDelete,
}) => {
  const [text, setText] = useState(task.text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    onSave(text);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="w-full rounded p-2 mb-4 border border-gray-300"
      />
      <div className="flex">
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded bg-blue-500 text-white mr-2"
        >
          Save
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditTaskPage;

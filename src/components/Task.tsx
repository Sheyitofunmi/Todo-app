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
    <div
      className="flex items-center justify-between mb-5 mx-[10px] py-3 bg-[#fff] px-3 rounded-md"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      }}
    >
      <div className="flex gap-4">
        <div
          className="rounded-full border-2  flex items-center justify-center mr-2"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            backgroundColor: task.completed ? "#53DA69" : "transparent",
            borderColor: task.completed ? "#53DA69" : "#071D55",
          }}
          onClick={handleToggle}
        >
          {task.completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#399649"
              width="18px"
              height="18px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          )}
        </div>
        <div
          className={` text-[#071D55] ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </div>
      </div>

      <div>
        <button
          onClick={onEditClick}
          className="px-2 py-1 rounded bg-white text-[#071D55] border-[1px] border-[#071D55]  "
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Task;

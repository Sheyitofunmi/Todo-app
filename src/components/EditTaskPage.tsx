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
    <div className="px-5 h-[30.5rem]  relative ">
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="w-full rounded p-3 mb-4 text-[#0D2972] text-[15px] border leading-3 border-[#CBCBCB] active:border-[#071D55] focus:border-[#071D55]"
        />
        <div className="flex gap-4 w-full px-4 absolute bottom-[15px]">
          <div className="lg:w-[20%]">
            <button
              onClick={handleDelete}
              className="px-4 py-[0.8rem] rounded w-full bg-[#AB3535] text-white"
            >
              Delete
            </button>
          </div>
          <div className="w-[80%]">
            <button
              onClick={handleSave}
              className="px-4 py-[0.8rem] rounded w-full bg-[#3556AB] text-white mr-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;

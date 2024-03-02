import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: (text: string) => void;
  initialText?: string; // Make initialText optional
}

const TaskInput: React.FC<TaskInputProps> = ({
  onAddTask,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);

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
    <form
      onSubmit={handleSubmit}
      className="absolute bottom-[70px] w-full px-2"
    >
      <input
        type="text"
        placeholder="Add new task"
        value={text}
        onChange={handleChange}
        className="w-full rounded p-3 border-2 border-[#CBCBCB]text-[#0D2972] text-[15px] leading-3   "
      />
    </form>
  );
};

export default TaskInput;

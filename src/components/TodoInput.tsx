"use client";

import { useState } from "react";

const TodoInput = () => {
  const [value, setValue] = useState("");

  const createTodo = () => {
    // 대충 post 이벤트 하기
    setValue("");
  };

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="bg-black100"
      />
      <button className="bg-black200" onClick={createTodo}>
        + 추가하기
      </button>
    </div>
  );
};

export default TodoInput;

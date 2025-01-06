"use client";
import React, { useState } from "react";
import clsx from "clsx";

const TodoInput = ({ isEmpty }: { isEmpty: boolean }) => {
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
      <form>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="bg-black100 h-[56px] rounded-[24px]"
        />
        <button
          className={clsx({
            "bg-mainPurple text-white": isEmpty,
            "bg-black200 text-black": !isEmpty,
          })}
          onClick={createTodo}
        >
          + 추가하기
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

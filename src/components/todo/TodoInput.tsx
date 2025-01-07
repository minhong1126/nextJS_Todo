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
    <div className="w-full">
      <form className="flex font-700 justify-between">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="할 일을 입력해주세요"
          className="bg-black100 h-[56px] flex-1 rounded-[24px] pl-[24px] mr-[8px] sm:mr-[16px]"
        />
        <button
          className={clsx("h-[56px] sm:w-[158.48px] w-[54.78px]", {
            "bg-mainPurple text-white": isEmpty,
            "bg-black200 text-black": !isEmpty,
          })}
          onClick={createTodo}
        >
          <span className="hidden sm:block"> + 추가하기</span>
          <span className="block sm:hidden"> + </span>
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

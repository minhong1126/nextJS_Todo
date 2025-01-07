"use client";
import React, { useState } from "react";
import clsx from "clsx";

const TodoInput = ({ isEmpty }: { isEmpty: boolean }) => {
  const [value, setValue] = useState<string>("");

  async function createTodo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const data = await fetch(
        "https://assignment-todolist-api.vercel.app/api/min/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: value,
          }),
        }
      )
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          console.error("fetch error", err);
        });
      console.error(data);
      setValue("");
    } catch (err) {
      console.error("try error", err);
    }
  }

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

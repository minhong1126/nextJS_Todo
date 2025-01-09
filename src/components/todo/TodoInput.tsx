"use client";
import React, { useState } from "react";
import clsx from "clsx";

const TodoInput = ({
  isEmpty,
  isListChanged,
  setIsListChanged,
}: {
  isEmpty: boolean;
  isListChanged: number;
  setIsListChanged: (num: number) => void;
}) => {
  const [value, setValue] = useState<string>("");

  async function createTodo(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) {
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
        .then((res) => res.json())
        .catch((err) => {
          console.error("fetch error", err);
        });

      console.error(data);
      setValue("");
      setIsListChanged(isListChanged + 1);
    } catch (err) {
      console.error("try error", err);
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      createTodo(e);
    }
  }

  return (
    <div className="w-full">
      <form className="flex font-700 justify-between">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
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

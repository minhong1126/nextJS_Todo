"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { useListStore } from "@/state/listState";

const TodoInput = ({}) => {
  const [value, setValue] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const { getList } = useListStore();

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
      getList();
    } catch (err) {
      console.error("try error", err);
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (e.target.value.length == 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      createTodo(e);
    }
  }

  return (
    <div className="w-full">
      <form className="flex items-center font-700 justify-between">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="할 일을 입력해주세요"
          className="bg-black100 h-[56px] rounded-[24px] pl-[24px] mr-[8px] sml:mr-[16px] sml:w-[280px] med:w-[518px] lar:w-[1016px]"
        />
        <button
          className={clsx("h-[56px] sml:w-[168px] w-[56px]", {
            "bg-mainPurple text-white": !isEmpty,
            "bg-black200 text-black": isEmpty,
          })}
          onClick={createTodo}
        >
          <span className="hidden sml:block">+ 추가하기</span>
          <span className="block sml:hidden"> + </span>
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

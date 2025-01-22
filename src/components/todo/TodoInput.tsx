import React, { useState } from "react";
import clsx from "clsx";
import { useListStore } from "@/state/listState";

// TodoInput.tsx
// todo의 내용을 입력해 새로 생성하는 컴포넌트.
// + 및 추가하기 버튼을 클릭하거나 Enter을 누르면 todo가 만들어져 바로 표시됩니다.

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
          body: JSON.stringify({ name: value }),
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error("fetch error", err);
        });

      console.error(data);
      setValue("");
      setIsEmpty(true);
      getList();
    } catch (err) {
      console.error("try error", err);
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (e.target.value.length === 0) {
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
    <div className="w-full mt-[24px]">
      <form className="flex items-center font-700 justify-center">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="할 일을 입력해주세요"
          className="bg-black100 h-[56px] rounded-[24px] pl-[24px] mr-[8px] border-2 border-black900
          sml:mr-[16px] sml:w-[280px] med:w-[518px] lar:w-[1016px]
          sml:input-shadow-small med:input-shadow-medium lar:input-shadow-large"
        />
        <button
          className={clsx(
            "boxBtn h-[56px] med:w-[168px] w-[56px] border-2 border-black900",
            {
              "bg-mainPurple text-white": !isEmpty,
              "bg-black200 text-black": isEmpty,
            },
            "sml:button-shadow-small med:button-shadow-medium lar:button-shadow-large"
          )}
          onClick={createTodo}
        >
          <span className="hidden med:block">+ 추가하기</span>
          <span className="block med:hidden"> + </span>
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

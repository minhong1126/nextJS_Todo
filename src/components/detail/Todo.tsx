"use client";
import { useDetailStore } from "@/state/detailState";
import clsx from "clsx";
import { useRef, useState, useEffect } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

// detail/Todo.tsx
// 상세 페이지의 Todo.
// 완료, 미완료 상태 및 내용을 변경할 수 있습니다.
// 내용을 지울 때 조금 불편한 감이 없지않아 있습니다. 한 단어 삭제 후 클릭을 반복해주시면 됩니다.

const Todo = () => {
  const { todo, setTodo, updateTodo } = useDetailStore();
  const [text, setText] = useState(todo.name);
  const divRef = useRef<HTMLDivElement | null>(null);

  function changeComplete() {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    setTodo(updatedTodo);
    updateTodo(updatedTodo);
  }

  useEffect(() => {
    if (text !== todo.name) {
      const updatedTodo = { ...todo, name: text };
      setTodo(updatedTodo);
      updateTodo(updatedTodo);
    }
  });

  const onChange = (e: React.FormEvent<HTMLDivElement>) => {
    setText(e.currentTarget.innerText);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={clsx(
          "flex border-2 border-black900 rounded-[24px] h-[64px] w-full justify-center items-center mb-[24px] lar:w-[996px] med:w-[696px] sml:w-[343px]",
          {
            "bg-lightPurple": todo.isCompleted,
            "bg-white": !todo.isCompleted,
          }
        )}
      >
        <button
          className="w-[32px] h-[32px] mr-[16px]"
          onClick={changeComplete}
        >
          {todo.isCompleted ? (
            <IoIosCheckmarkCircle className="w-[32px] h-[32px] text-mainPurple" />
          ) : (
            <div className="w-[32px] h-[32px] bg-[#FEFCE8] border-2 rounded-full" />
          )}
        </button>
        <div
          ref={divRef}
          contentEditable
          suppressContentEditableWarning={true}
          className="underline text-[20px] font-bold"
          onInput={onChange}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Todo;

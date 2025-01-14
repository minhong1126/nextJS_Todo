"use client";
import { useDetailStore } from "@/state/detailState";
import { useRef, useState, useEffect } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

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
  }, [text]);

  const onChange = (e: React.FormEvent<HTMLDivElement>) => {
    setText(e.currentTarget.innerText);
  };

  return (
    <div
      className={
        "flex border-2 border-black900 rounded-[24px] h-[64px] justify-center items-center mb-[24px] lar:w-[996px] med:w-[696px] sml:w-[343px]"
      }
    >
      <button className="w-[32px] h-[32px] mr-[16px]" onClick={changeComplete}>
        {todo.isCompleted ? (
          <IoIosCheckmarkCircle className="w-[32px] h-[32px]" />
        ) : (
          <div className="w-[32px] h-[32px] bg-[#FEFCE8] border-2 rounded-full" />
        )}
      </button>
      <div
        ref={divRef}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={onChange}
      >
        {text}
      </div>
    </div>
  );
};

export default Todo;

"use client";
import List from "@/components/todo/List";
import TodoInput from "@/components/todo/TodoInput";

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center bg-gray">
        <TodoInput />
        <List />
      </div>
    </>
  );
}

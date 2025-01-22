"use client";
import List from "@/components/todo/List";
import TodoInput from "@/components/todo/TodoInput";

// app/page.tsx
// "/" 페이지.
// todo를 입력할 수 있는 TodoInput 컴포넌트와 할 일 리스트, 완료된 일 리스트가 담긴 List 컴포넌트를 불러옵니다.

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

"use client";
import Header from "@/components/layout/Header";
import Todo from "@/components/detail/Todo";
import MemoInput from "@/components/detail/MemoInput";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function Page() {
  const [todo, setTodo] = useState<TodoItem | []>([]);
  const path = usePathname();

  useEffect(() => {
    async function getTodo() {
      const data = await fetch(
        `https://assignment-todolist-api.vercel.app/api/min${path}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => console.error(err));
      setTodo(data);
    }
    getTodo();
  }, [path]);

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div className="max-w-[1200px] max-h-[1020px] w-full flex flex-col items-center">
          <Header />
          <div className="px-[102px]">
            <Todo todo={todo} />
            <MemoInput todo={todo} />
          </div>
        </div>
      </div>
    </>
  );
}

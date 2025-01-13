"use client";
import { useState, useEffect } from "react";
import Todo from "@/components/detail/Todo";
import MemoInput from "@/components/detail/MemoInput";
import { usePathname } from "next/navigation";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
  memo: string | null;
  imgUrl: string | null;
}

export default function Page() {
  const [todo, setTodo] = useState<TodoItem | null>(null);
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
      <div className="flex flex-col w-full items-center mt-[24px]">
        <div className="w-full flex flex-col items-center">
          <div className="px-[102px]">
            {!todo ? (
              <div>Loading...</div>
            ) : (
              <>
                <Todo todo={todo} />
                <MemoInput todo={todo} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

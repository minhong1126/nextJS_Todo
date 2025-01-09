"use client";
import Header from "@/components/layout/Header";
import List from "@/components/todo/List";
import TodoInput from "@/components/todo/TodoInput";
import { useEffect, useState } from "react";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function Page() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [list, setList] = useState<TodoItem[]>([]);
  const [isListChanged, setIsListChnaged] = useState<number>(0);

  async function getList() {
    const data = await fetch(
      "https://assignment-todolist-api.vercel.app/api/min/items",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    setList(data);
  }

  useEffect(() => {
    getList();
  }, [isListChanged]);

  useEffect(() => {
    if (list.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [list]);

  return (
    <>
      <div className="flex flex-col w-full items-center bg-gray">
        <div className="max-w-[1200px] max-h-[1020px] w-full flex flex-col items-center">
          <Header />
          <TodoInput
            isEmpty={isEmpty}
            isListChanged={isListChanged}
            setIsListChanged={setIsListChnaged}
          />
          <List
            prop={list}
            isListChanged={isListChanged}
            setIsListChanged={setIsListChnaged}
          />
        </div>
      </div>
    </>
  );
}

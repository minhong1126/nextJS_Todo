"use client";
// import Image from "next/image";
import Header from "@/components/layout/Header";
import List from "@/components/todo/List";
import TodoInput from "@/components/todo/TodoInput";
import stateList from "@/util/state";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Page() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  // const [list, setList] = useState<[]>();
  const list = useRecoilState(stateList.list);

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
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.error(err));

    const todoList = todos.filter((todo) => !todo.isCompleted);
    const doneList = todos.filter((todo) => todo.isCompleted);

    setList(data);
  }

  useEffect(() => {
    getList();
    if (list?.length == 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col w-full items-center  bg-gray">
        <div className="max-w-[1200px] max-h-[1020px] w-full flex flex-col items-center">
          <Header />
          <TodoInput isEmpty={isEmpty} />
          <List prop={list} />
        </div>
      </div>
    </>
  );
}

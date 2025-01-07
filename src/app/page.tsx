"use client";
// import Image from "next/image";
import Header from "@/components/layout/Header";
import List from "@/components/todo/List";
import TodoInput from "@/components/todo/TodoInput";
import { useEffect, useState } from "react";

export default function Page() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [list, setList] = useState<[]>();

  // useEffect(() => {
  //   fetch("/api/min/items")
  //     .then((res) => {
  //       res.json();
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

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

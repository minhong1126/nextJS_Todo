"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/layout/Header";
import TodoInput from "@/components/todo/TodoInput";
import TodoLabel from "../../public/image/todo.png";
import DoneLabel from "../../public/image/done.png";
import TodoLarge from "../../public/image/todo-large.png";
import DoneLarge from "../../public/image/done-lage.png";

export default function Home() {
  const [todoList, setTodoList] = useState();
  const [doneList, setDoneList] = useState();
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  return (
    <>
      <Header />
      <TodoInput isEmpty={isEmpty} />
      <div>
        <div>
          <Image src={TodoLabel} alt="Todo Label" />
          {todoList == null ? (
            <>
              <Image src={TodoLarge} alt="no Todo" />
              <div className="font-bold text-black400">
                <p>할 일이 없어요. </p>
                <p> TODO를 새롭게 추가해주세요!</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          <Image src={DoneLabel} alt="Done Label" />
          {doneList == null ? (
            <>
              <Image src={DoneLarge} alt="no Done" />
              <div className="font-bold text-black400">
                <p>아직 다 한 일이 없어요.</p>
                <p>해야 할 일을 체크해보세요! </p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

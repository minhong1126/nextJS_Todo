"useClient";
import Image from "next/image";
import TodoLabel from "../../../public/image/todo.png";
import TodoLarge from "../../../public/image/todo-large.png";
import TodoSmall from "../../../public/image/todo-small.png";
import DoneLabel from "../../../public/image/done.png";
import DoneLarge from "../../../public/image/done-large.png";
import DoneSmall from "../../../public/image/done-small.png";
import Todo from "./Todo";
import { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Image src={TodoLabel} alt="Todo Label" />
      {todoList.length == 0 ? (
        <>
          <Image
            src={TodoLarge}
            alt="no Todo"
            className="hidden sm:block h-[240px] w-[240px]"
          />
          <Image
            src={TodoSmall}
            alt="no Todo"
            className="block sm:hidden h-[120px] w-[120px]"
          />
          <div className="text-black400">
            <p>할 일이 없어요. </p>
            <p> TODO를 새롭게 추가해주세요!</p>
          </div>
        </>
      ) : (
        <>
          <div className="lg:w-[588px] w-90% bg-mainPurple">
            <p> hiiii </p>
            {/* <Todo /> */}
          </div>
        </>
      )}
    </div>
  );
};

const DoneList = () => {
  const [doneList, setDoneList] = useState([]);
  return (
    <div>
      <Image src={DoneLabel} alt="Done Label" />
      {doneList.length == 0 ? (
        <>
          <Image
            src={DoneLarge}
            alt="no Done"
            className="hidden sm:block h-[240px] w-[240px]"
          />
          <Image
            src={DoneSmall}
            alt="no Done"
            className="block sm:hidden h-[120px] w-[120px]"
          />
          <div className="text-black400">
            <p>아직 다 한 일이 없어요.</p>
            <p>해야 할 일을 체크해보세요! </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

const List = (prop) => {
  return (
    <>
      <div className="md:flex justify-between">
        <TodoList /> <DoneList />
      </div>
    </>
  );
};

export default List;

import Image from "next/image";
import { useEffect } from "react";
import TodoLabel from "../../../public/image/todo.png";
import TodoLarge from "../../../public/image/todo-large.png";
import TodoSmall from "../../../public/image/todo-small.png";
import DoneLabel from "../../../public/image/done.png";
import DoneLarge from "../../../public/image/done-large.png";
import DoneSmall from "../../../public/image/done-small.png";
import Todo from "./Todo";
import { useListStore } from "@/state/listState";

// List.tsx
// 할 일 리스트, 완료 리스트가 담긴 컴포넌트.
// List 컴포넌트 내부에서 TodoList, DoneList가 선언되어 return 하는 방식입니다.

const List = () => {
  const { todoList, doneList, getList, toggleTodoDone } = useListStore();

  useEffect(() => {
    getList();
  }, [getList]);

  const handleToggleComplete = (id: number) => {
    toggleTodoDone(id);
  };

  const TodoList = () => {
    return (
      <div
        className="lar:w-[588px] med:w-[696px] sml:w-[344px] 
      lar:mr-[24px] lar:mb-0 sml:mb-[48px]"
      >
        <Image src={TodoLabel} alt="Todo Label" />
        {todoList.length === 0 ? (
          <div
            className="flex flex-col justify-center items-center 
          lar:mt-[64px] lar:ml-[77px]"
          >
            <Image
              src={TodoLarge}
              alt="no Todo"
              className="hidden sml:block h-[240px] w-[240px]"
            />
            <Image
              src={TodoSmall}
              alt="no Todo"
              className="block sml:hidden h-[120px] w-[120px]"
            />
            <div className="flex flex-col items-center text-black400 lar:mt-[24px]">
              <p>할 일이 없어요.</p>
              <p> TODO를 새롭게 추가해주세요!</p>
            </div>
          </div>
        ) : (
          <div className="">
            {todoList.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggleComplete={handleToggleComplete}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const DoneList = () => {
    return (
      <div className="lar:w-[588px] med:w-[696px] sml:w-[344px]">
        <Image src={DoneLabel} alt="Done Label" />
        {doneList.length === 0 ? (
          <div
            className="flex flex-col justify-center items-center 
          lar:mt-[64px] lar:ml-[77px]"
          >
            <Image
              src={DoneLarge}
              alt="no Done"
              className="hidden sml:block h-[240px] w-[240px]"
            />
            <Image
              src={DoneSmall}
              alt="no Done"
              className="block sml:hidden h-[120px] w-[120px]"
            />
            <div className="flex flex-col items-center text-black400 lar:mt-[24px]">
              <p>아직 다 한 일이 없어요.</p>
              <p>해야 할 일을 체크해보세요!</p>
            </div>
          </div>
        ) : (
          <div className="">
            {doneList.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggleComplete={handleToggleComplete}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="lar:flex justify-between mt-[40px]">
      <TodoList />
      <DoneList />
    </div>
  );
};

export default List;

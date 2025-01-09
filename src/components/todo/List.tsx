import Image from "next/image";
import { useEffect, useState } from "react";
import TodoLabel from "../../../public/image/todo.png";
import TodoLarge from "../../../public/image/todo-large.png";
import TodoSmall from "../../../public/image/todo-small.png";
import DoneLabel from "../../../public/image/done.png";
import DoneLarge from "../../../public/image/done-large.png";
import DoneSmall from "../../../public/image/done-small.png";
import Todo from "./Todo";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

const List = ({ prop }: { prop: TodoItem[] }) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    setTodos(prop || []);
  }, [prop]);

  const todoList = todos.filter((todo) => !todo.isCompleted);
  const doneList = todos.filter((todo) => todo.isCompleted);

  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const TodoList = ({ list }: { list: TodoItem[] }) => {
    return (
      <div>
        <Image src={TodoLabel} alt="Todo Label" />
        {list.length === 0 ? (
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
              <p>할 일이 없어요.</p>
              <p> TODO를 새롭게 추가해주세요!</p>
            </div>
          </>
        ) : (
          <div className="">
            {list.map((todo) => (
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

  const DoneList = ({ list }: { list: TodoItem[] }) => {
    return (
      <div>
        <Image src={DoneLabel} alt="Done Label" />
        {list.length === 0 ? (
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
              <p>해야 할 일을 체크해보세요!</p>
            </div>
          </>
        ) : (
          <div className="">
            {list.map((todo) => (
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
    <div className="md:flex justify-between">
      <TodoList list={todoList} />
      <DoneList list={doneList} />
    </div>
  );
};

export default List;

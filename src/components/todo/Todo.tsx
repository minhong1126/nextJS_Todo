import clsx from "clsx";
import { redirect } from "next/navigation";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

const Todo = ({ todo }: { todo: TodoItem }) => {
  function gotoDetail() {
    redirect(`items/${todo.id}`);
  }

  async function changeIsCompleted() {}

  return (
    <>
      <div className={clsx("flex")}>
        <button
          className="h-[32px] w-[32px] border-2 bg-black"
          onClick={changeIsCompleted}
        />
        <div onClick={gotoDetail}>
          <span> {todo.name} </span>
        </div>
      </div>
    </>
  );
};

export default Todo;

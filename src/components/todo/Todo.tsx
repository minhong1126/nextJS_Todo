import clsx from "clsx";

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

const Todo = (prop: Todo) => {
  return (
    <>
      <div className={clsx("max-w-[588px] w-full")}>
        <button></button>
        <div>
          <span> {prop.content} </span>
        </div>
      </div>
    </>
  );
};

export default Todo;

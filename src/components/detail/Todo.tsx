import clsx from "clsx";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface TodoItem {
  todo: {
    id: number;
    name: string;
    isCompleted: boolean;
  };
}

const Todo = ({ todo }: TodoItem) => {
  return (
    <>
      <div
        className={clsx(
          "flex border-2 border-black900 rounded-[24px] h-[64px] justify-center items-center"
        )}
      >
        <button className="w-[32px] h-[32px]">
          {todo.isCompleted ? (
            <>
              <IoIosCheckmarkCircle className="w-[32px] h-[32px]" />
            </>
          ) : (
            <>
              <IoIosCheckmarkCircle className="w-[32px] h-[32px]" />
            </>
          )}
        </button>
        <span>
          <h1> {todo.name}</h1>
        </span>
      </div>
    </>
  );
};

export default Todo;

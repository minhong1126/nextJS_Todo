import clsx from "clsx";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface TodoProp {
  todo: {
    id: number;
    content: string;
    isDone: boolean;
  };
}

const Todo = ({ todo }: TodoProp) => {
  return (
    <>
      <div
        className={clsx(
          "flex border-2 border-black900 rounded-[24px] h-[64px] justify-center items-center"
        )}
      >
        <button className="w-[32px] h-[32px]">
          {todo.isDone ? (
            <>
              <IoIosCheckmarkCircle className="w-[32px] h-[32px]" />
            </>
          ) : null}
        </button>
        <span>
          <h1> {todo.content}</h1>
        </span>
      </div>
    </>
  );
};

export default Todo;

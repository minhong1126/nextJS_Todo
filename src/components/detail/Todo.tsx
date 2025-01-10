import clsx from "clsx";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface TodoItem {
  todo: {
    id: number;
    name: string;
    isCompleted: boolean;
    memo: string | null;
    imgUrl: string | null;
  };
}

const Todo = ({ todo }: TodoItem) => {
  return (
    <>
      <div
        className={clsx(
          "flex border-2 border-black900 rounded-[24px] h-[64px] justify-center items-center mb-[24px]"
        )}
      >
        <button className="w-[32px] h-[32px] mr-[16px]">
          {todo.isCompleted ? (
            <>
              <IoIosCheckmarkCircle className="w-[32px] h-[32px]" />
            </>
          ) : (
            <>
              <div className="w-[32px] h-[32px] bg-[#FEFCE8] border-2 rounded-full" />
            </>
          )}
        </button>
        <span>
          <h1 className="underline"> {todo.name}</h1>
        </span>
      </div>
    </>
  );
};

export default Todo;

import clsx from "clsx";
import { redirect } from "next/navigation";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

// todo/Todo.tsx
// '/' 페이지의 개별 todo.
// 기본적으로 todo에 등록된 내용 및 완료 여부가 표시됩니다.
// 동그란 버튼 클릭 시 완료 여부를 변경할 수 있습니다.

const Todo = ({
  todo,
  onToggleComplete,
}: {
  todo: TodoItem;
  onToggleComplete: (id: number) => void;
}) => {
  function gotoDetail() {
    redirect(`items/${todo.id}`);
  }

  function changeIsCompleted() {
    onToggleComplete(todo.id);
  }

  return (
    <div
      className={clsx(
        "flex items-center border-2 border-solid rounded-full w-full pl-[12px] mt-[16px]",
        {
          "bg-lightPurple h-[48px]": todo.isCompleted,
          "bg-white h-[50px]": !todo.isCompleted,
        }
      )}
    >
      <button
        className={"btnBox flex items-center rounded-full h-[32px] w-[32px]"}
        onClick={changeIsCompleted}
      >
        {todo.isCompleted ? (
          <IoIosCheckmarkCircle color="#7c3aed" className="h-[32px] w-[32px]" />
        ) : (
          <div className="bg-white h-[32px] w-[32px] rounded-full border-2 border-black" />
        )}
      </button>
      <div onClick={gotoDetail} className="ml-[16px] cursor-pointer">
        <h3
          className={clsx("text-black800", {
            "line-through": todo.isCompleted,
          })}
        >
          {todo.name}
        </h3>
      </div>
    </div>
  );
};

export default Todo;

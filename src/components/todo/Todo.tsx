import clsx from "clsx";
import { redirect } from "next/navigation";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

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

  // isCompleted 상태를 변경하는 함수
  function changeIsCompleted() {
    onToggleComplete(todo.id); // 부모에서 전달받은 함수 호출
  }

  return (
    <div className={clsx("flex")}>
      <button
        className="h-[32px] w-[32px] border-2 bg-black"
        onClick={changeIsCompleted} // 상태 변경 버튼 클릭 시 호출
      />
      <div onClick={gotoDetail}>
        <span>{todo.name}</span>
      </div>
    </div>
  );
};

export default Todo;

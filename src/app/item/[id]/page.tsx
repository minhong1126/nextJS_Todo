import Header from "@/components/layout/Header";
import Todo from "@/components/detail/Todo";
import Form from "@/components/detail/MemoInput";

export default function Page() {
  const ex = {
    id: 1,
    content: "hi",
    isDone: true,
  };
  return (
    <>
      <Header />
      <div className="px-[102px]">
        <Todo todo={ex} />
        <Form />
      </div>
    </>
  );
}

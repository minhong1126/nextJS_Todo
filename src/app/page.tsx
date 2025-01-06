import Image from "next/image";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import TodoLabel from "../../public/image/todo.png";
import DoneLabel from "../../public/image/done.png";

export default function Home() {
  return (
    <>
      <Header />
      <TodoInput />
      <div>
        <div>
          <Image src={TodoLabel} alt="Todo Label" />
        </div>
        <div>
          <Image src={DoneLabel} alt="Done Label" />
        </div>
      </div>
    </>
  );
}

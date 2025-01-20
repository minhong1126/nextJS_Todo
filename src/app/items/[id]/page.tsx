"use client";
import { useEffect } from "react";
import Todo from "@/components/detail/Todo";
import MemoInput from "@/components/detail/MemoInput";
import { usePathname } from "next/navigation";
import { useDetailStore } from "@/state/detailState";

export default function Page() {
  const path = usePathname();
  const { getTodo, loading } = useDetailStore();

  useEffect(() => {
    getTodo(path);
  }, [path]);

  return (
    <div className="w-full items-center justify-center pt-[24px] bg-gray">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Todo />
          <MemoInput />
        </>
      )}
    </div>
  );
}

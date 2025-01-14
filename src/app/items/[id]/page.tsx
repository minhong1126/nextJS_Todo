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
    <div className="w-full items-center justify-center mt-[24px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="px-[102px]">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <Todo />
              <MemoInput />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

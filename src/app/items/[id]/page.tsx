"use client";
import { useEffect } from "react";
import Todo from "@/components/detail/Todo";
import MemoInput from "@/components/detail/MemoInput";
import { usePathname } from "next/navigation";
import { useDetailStore } from "@/state/detailState";

// app/items/{id}/page.tsx
// "items/{id}" 상세 페이지.
// todo를 받아오기 전에는 로딩이 뜹니다.
// 상단의 todo 내용을 담은 Todo 컴포넌트,
// 사진 등록, 메모 등록, 수정, 삭제 버튼이 담긴 MemoInput 컴포넌트를 불러옵니다.

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

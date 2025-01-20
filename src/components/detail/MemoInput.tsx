"use client";
import Image from "next/image";
import Memo from "../../../public/image/memo.png";
import nullImg from "../../../public/image/img.png";
import { IoIosClose, IoIosCheckmark, IoIosAdd } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { redirect } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { useDetailStore } from "@/state/detailState";

// MemoInput.tsx
// 사진 등록, 메모 입력, 수정하기 및 삭제하기 버튼이 선언되어 있습니다.
// 사진은 올리자마자 바로 서버에 등록되는 방식입니다.

const MemoInput = () => {
  const { todo, setTodo, updateTodo, deleteTodo } = useDetailStore();
  const [memo, setMemo] = useState(todo.memo || "");
  const [img, setImg] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState<string | null>(todo.imageUrl || null);
  const imgRef = useRef<HTMLInputElement | null>(null);

  async function addImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPrevImg(previewUrl);
      setImg(file);
      console.log(img);

      const formData = new FormData();
      formData.append("image", file);

      try {
        const data = await fetch(
          `https://assignment-todolist-api.vercel.app/api/min/images/upload`,
          {
            method: "POST",
            body: formData,
          }
        ).then((res) => {
          return res.json();
        });

        const updatedTodo = { ...todo, imageUrl: data.url };
        setTodo(updatedTodo);
        updateTodo(updatedTodo);
        setPrevImg(todo.imageUrl);
      } catch (err) {
        console.error("Image upload failed", err);
      }
    }
  }

  async function onUpdate(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const updatedTodo = { ...todo, memo: memo };
    setTodo(updatedTodo);
    updateTodo(updatedTodo);
    redirect("/");
  }

  function onDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    deleteTodo(todo.id);
    redirect("/");
  }

  useEffect(() => {
    if (todo.imageUrl) {
      setPrevImg(todo.imageUrl);
      console.error(todo.imageUrl);
    }
  }, [todo.imageUrl]);

  return (
    <div className="flex justify-center items-center">
      <form className="w-full max-w-[996px] flex flex-col items-center justify-center">
        <div className="flex lar:flex-row flex-col items-center justify-center w-full">
          <div className="relative lar:w-[384px] med:w-[696px] sml:w-[343px] h-[311px] flex-shrink-0 lar:mr-[24px]">
            <div className="bg-[#F8FAFC] rounded-[24px] border-2 border-dotted border-black300 flex justify-center items-center h-full relative overflow-hidden">
              {prevImg ? (
                <Image
                  src={prevImg}
                  alt="미리보기 이미지"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[24px]"
                  fill
                  priority
                />
              ) : (
                <div className="w-[64px] h-[64px]">
                  <Image
                    src={nullImg}
                    alt="이미지 없음"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={() => imgRef.current?.click()}
                className={clsx(
                  "absolute bottom-[16px] right-[16px] w-[64px] h-[64px] rounded-full cursor-pointer",
                  {
                    "bg-black200 ": prevImg == null,
                    "bg-black900 bg-opacity-50": prevImg != null,
                  }
                )}
              >
                {prevImg == null ? (
                  <>
                    <span className="flex items-center justify-center">
                      <IoIosAdd className="text-black500 w-[24px] h-[24px] text-[3px]" />
                    </span>
                  </>
                ) : (
                  <>
                    <span className="flex items-center justify-center">
                      <FaPen color="white" className="w-[24px] h-[24px]" />
                    </span>
                  </>
                )}
              </button>
            </div>
            <input
              type="file"
              ref={imgRef}
              onChange={addImage}
              className="hidden"
            />
          </div>

          <div
            className="flex flex-row items-center relative flex-shrink-0
           lar:w-[588px] med:w-[696px] sml:w-[343px] h-[311px] lar:mt-0 med:mt-[24px] sml:mt-[15px]"
          >
            <Image
              src={Memo}
              alt="Memo"
              className="object-cover w-full h-full rounded-[24px]"
            />
            <div className="flex items-center absolute top-0 w-full h-full flex-col">
              <p className="text-amber font-800 w-full text-center mt-[24px]">
                Memo
              </p>
              <div className="w-full h-full mt-2 px-4">
                <textarea
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  className="w-full h-full rounded-[24px] bg-transparent resize-none overflow-y-auto p-[3px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lar:justify-end mt-4 w-full">
          <button
            className={clsx(
              "flex items-center mr-[16px] px-4 py-2 border-2 border-black900",
              {
                "bg-black200": todo.memo?.length == 0,
                "bg-lime": todo.memo?.length != 0,
              }
            )}
            onClick={onUpdate}
          >
            <IoIosCheckmark className="mr-[4px]" />
            <p>수정 완료</p>
          </button>
          <button
            className="flex items-center bg-rose text-white border-2 border-black900"
            onClick={onDelete}
          >
            <IoIosClose className="mr-[4px]" />
            <p>삭제하기</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemoInput;

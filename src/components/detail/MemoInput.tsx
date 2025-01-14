"use client";
import Image from "next/image";
import Memo from "../../../public/image/memo.png";
import nullImg from "../../../public/image/img.png";
import { IoIosClose, IoIosCheckmark, IoIosAdd } from "react-icons/io";
import { redirect } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { useDetailStore } from "@/state/detailState";

const MemoInput = () => {
  const { todo, setTodo, updateTodo, deleteTodo } = useDetailStore();
  const [memo, setMemo] = useState(todo.memo || "");
  const [img, setImg] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState<string | null>(todo.imgUrl || null);
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
        )
          .then((res) => {
            return res.json();
          })
          .catch((err) => console.error(err));

        const updatedTodo = { ...todo, imgUrl: data.url };
        setTodo(updatedTodo);
        updateTodo(updatedTodo);
        console.error("설정 후", todo.imgUrl);
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
  }

  useEffect(() => {
    if (todo.imgUrl) {
      setPrevImg(todo.imgUrl);
      console.error(todo.imgUrl);
    }
  }, [todo.imgUrl]);

  return (
    <div>
      <form>
        <div className="flex lar:flex-row flex-col items-center justify-center">
          <div className="relative lar:w-[588px] med:w-[696px] sml:w-[343px] h-[311px] flex-shrink-0 mr-[24px]">
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="bg-[#F8FAFC] rounded-[24px] border-2 border-dotted border-[#CBD5E1] flex justify-center items-center h-full relative overflow-hidden">
                {prevImg ? (
                  <Image
                    src={prevImg}
                    alt="미리보기 이미지"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[24px]"
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
                <IoIosAdd className="absolute top-2 right-2 text-white text-2xl" />
              </div>
            </label>
            <input
              type="file"
              id="file-upload"
              ref={imgRef}
              onChange={addImage}
              className="hidden"
            />
          </div>

          <div className="flex flex-row items-center relative lar:w-[588px] med:w-[696px] sml:w-[343px] h-[311px] flex-shrink-0">
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

        <div className="flex lar:justify-end justify-center mt-4">
          <button
            className={clsx("flex items-center mr-[16px]  px-4 py-2", {
              "bg-gray300": todo.memo?.length == 0,
              "bg-lime text-white": todo.memo?.length != 0,
            })}
            onClick={onUpdate}
          >
            <IoIosCheckmark className="mr-[4px]" />
            <p>수정 완료</p>
          </button>
          <button
            className="flex items-center bg-rose text-white "
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

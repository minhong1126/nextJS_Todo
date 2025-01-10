import Image from "next/image";
import Memo from "../../../public/image/memo.png";
import nullImg from "../../../public/image/img.png";
import { IoIosClose, IoIosCheckmark, IoIosAdd } from "react-icons/io";
import { redirect } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

interface TodoItem {
  todo: {
    id: number;
    name: string;
    isCompleted: boolean;
    memo: string | null;
    imgUrl: string | null;
  };
}

const MemoInput = ({ todo }: TodoItem) => {
  const [memo, setMemo] = useState<string | null>(todo.memo);
  const [img, setImg] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(todo.imgUrl);
  const [prevImg, setPrevImg] = useState<string | null>(todo.imgUrl);
  const imgRef = useRef();

  useEffect(() => {
    if (todo.imgUrl) {
      setPrevImg(todo.imgUrl);
      setImageUrl(todo.imgUrl);
    }
  }, [todo.imgUrl]);

  async function addImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImg(file);

      const previewUrl = URL.createObjectURL(file);
      setPrevImg(previewUrl);

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
          .then((res) => res.json())
          .catch((err) => console.error("이미지 post", err));

        setImageUrl(data.url);
      } catch (err) {
        console.error("Image upload failed", err);
      }
    }
  }

  async function updateTodo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const data = await fetch(
      `https://assignment-todolist-api.vercel.app/api/min/items/${todo.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: todo.name,
          memo: memo,
          imageUrl: imageUrl,
          isCompleted: todo.isCompleted,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    console.error(data);
    redirect("/");
  }

  async function deleteTodo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    await fetch(
      `https://assignment-todolist-api.vercel.app/api/min/items/${todo.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    redirect("/");
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMemo(e.target.value);
  }

  return (
    <div>
      <form>
        <div className="flex">
          <div className="relative">
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="bg-black300 rounded-[24px] border-2 border-dotted border-#F8FAFC p-2 flex justify-center items-center">
                {prevImg ? (
                  <Image
                    src={prevImg}
                    alt="Uploaded Image Preview"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={nullImg}
                    alt="default image"
                    height={64}
                    width={64}
                    className="object-cover"
                  />
                )}
                <IoIosAdd className="absolute top-0 right-0 text-white text-2xl" />
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

          <div className="relative">
            <Image src={Memo} alt="Memo" />
            <div className="absolute top-0 w-full h-full flex flex-col justify-between p-4">
              <p className="">Memo</p>
              <input value={memo} onChange={onChange} className="" />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="flex items-center bg-lime text-white"
            onClick={updateTodo}
          >
            <IoIosCheckmark className="" />
            <p>수정 완료</p>
          </button>
          <button className="flex items-center bg-rose" onClick={deleteTodo}>
            <IoIosClose className="mr-2" />
            <p>삭제하기</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemoInput;

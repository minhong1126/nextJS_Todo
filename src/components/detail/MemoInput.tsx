import Image from "next/image";
import Memo from "../../../public/image/memo.png";
import nullImg from "../../../public/image/img.png";
import { IoIosClose, IoIosCheckmark, IoIosAdd } from "react-icons/io";
import { redirect } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";

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
          <div className="relative w-[384px] h-[311px] flex-shrink-0 mr-[24px]">
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

          <div className="flex flex-row items-center relative w-[588px] h-[311px] flex-shrink-0">
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
                  value={memo || ""}
                  onChange={(e) => setMemo(e.target.value)}
                  className="w-full h-full rounded-[24px] bg-transparent resize-none overflow-y-auto p-[3px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className={clsx("flex items-center mr-[16px]  px-4 py-2", {
              "bg-gray300": memo?.length == 0,
              "bg-lime text-white": memo?.length != 0,
            })}
            onClick={updateTodo}
          >
            <IoIosCheckmark className="mr-[4px]" />
            <p>수정 완료</p>
          </button>
          <button
            className="flex items-center bg-rose text-white "
            onClick={deleteTodo}
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

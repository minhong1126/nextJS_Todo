import Image from "next/image";
import Memo from "../../../public/image/memo.png";
import img from "../../../public/image/img.png";
import { IoIosClose, IoIosCheckmark, IoIosAdd } from "react-icons/io";

const Form = () => {
  return (
    <div>
      <form>
        <div className="flex">
          <div className="bg-black300 rounded-[24px] border-2 border-dotted border-#F8FAFC">
            <Image src={img} alt="img" height={64} width={64} />
            <button>
              <IoIosAdd />
            </button>
          </div>
          <div>
            <Image src={Memo} alt="memo" />
          </div>
        </div>
        <div className="flex">
          <button className="flex bg-black200">
            <IoIosCheckmark />
            <p> 수정 완료 </p>
          </button>
          <button className="flex bg-rose text-white">
            <IoIosClose />
            <p> 삭제하기 </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

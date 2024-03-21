import { IoSend } from "react-icons/io5";
const SendMessage = () => {
  return (
    <div className="mt-2 flex gap-2">
      <div className="w-[90%]">
        <label className="input input-bordered flex items-center gap-2 rounded-3xl ">
          <input type="text" className="grow" placeholder="Enter a message" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          ></svg>
        </label>
      </div>

      <div className="">
        <div role="button" className="btn  btn-circle bg-blue-500 border-none">
          <button type="submit" className="btn-btn-circle   text-white">
            <IoSend className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;

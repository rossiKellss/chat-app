import { RiLogoutBoxLine } from "react-icons/ri";

function LogoutButton() {
  return (
    <div className=" -mx-3 mt-2 cursor-pointer ">
      <div
        role="button"
        className="btn btn-ghost border-none btn-rounded hover:text-blue-500 text-2xl text-gray-800 "
      >
        <RiLogoutBoxLine className="" />
      </div>
    </div>
  );
}

export default LogoutButton;

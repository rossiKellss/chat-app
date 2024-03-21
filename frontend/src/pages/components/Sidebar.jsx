import SearchInput from "../components/SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

function Sidebar() {
  return (
    <div className="border-r-2 pl-2 pr-4">
      <SearchInput />
      <div className="divider px-3 text-white"></div>
      <div className="overflow-y-auto  h-[75%]">
        <Conversations />
        <Conversations />
        <Conversations />
        <Conversations />
        <Conversations />
        <Conversations />
        <Conversations />
      </div>

      <div className="absolute bottom-1">
        <LogoutButton />
      </div>
    </div>
  );
}

export default Sidebar;

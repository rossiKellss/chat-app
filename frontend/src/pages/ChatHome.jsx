import MessagesBar from "./components/MessagesBar";
import Sidebar from "./components/Sidebar";

function ChatHome() {
  return (
    <div>
      <div className="body flex items-center justify-center min-w-[540px]">
        <div className="h-[85vh] min-w-[60%] bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 px-4 py-6 flex gap-2">
          <Sidebar />
          <div className="relative w-full">
            <MessagesBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHome;

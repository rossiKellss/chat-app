import MessageHead from "./MessageHead";
import SendMessage from "./SendMessage";
import UserMessages from "./UserMessages";

function MessagesBar() {
  return (
    <div className="relative px-4 w-full flex flex-col pt-20  ">
      <MessageHead />
      <UserMessages />
      <SendMessage />
    </div>
  );
}

export default MessagesBar;

import MessageHead from "./MessageHead";
import NoMessageContent from "./NoMessageContent";
import SendMessage from "./SendMessage";
import UserMessages from "./UserMessages";

function MessagesBar() {
  return (
    <div className="relative px-4 w-full h-full flex flex-col pt-20">
      {/* <NoMessageContent /> */}
      <MessageHead />
      <UserMessages />
      <SendMessage />
    </div>
  );
}

export default MessagesBar;

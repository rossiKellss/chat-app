function MessageHead() {
  return (
    <div className="absolute w-full bg-gray-800 flex items-center gap-2 left-0 top-0 px-4 py-2 rounded-md">
      <div className="w-10 avatar online">
        <img src="https://avatar.iran.liara.run/public/boy" alt="" />
      </div>
      <div>
        <span className="text-lg semibold">Username</span>
      </div>
    </div>
  );
}

export default MessageHead;

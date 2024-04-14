function Conversations() {
  return (
    <div className="px-2 py-3  border-b rounded-sm hover:bg-gray-500 transition ease-in duration-150  ">
      <div className="flex items-center  gap-3 text-[#1D232A] font-semibold text-base cursor-pointer">
        <div className="w-12 avatar online ">
          <img src="https://avatar.iran.liara.run/public/boy" alt="" />
        </div>
        <span>Username</span>
      </div>
    </div>
  );
}

export default Conversations;

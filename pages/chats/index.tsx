import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex py-3 px-4 items-center space-x-3 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="font-medium text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">See you tomorrow at 2pm!</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

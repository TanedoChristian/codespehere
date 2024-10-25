import { BookTemplateIcon } from "lucide-react";

export default function HeaderOne() {
  return (
    <header className="w-full  -red-500 h-[8vh] flex items-center px-5 border-b shadow-sm ">
      <div className="w-[40%]  flex items-center  gap-5 cursor-pointer">
        <a className="hover:border-b-2 hover:border-black">Home</a>
        <a className="hover:border-b-2 hover:border-black">Project</a>
        <a className="hover:border-b-2 hover:border-black">About Us</a>
      </div>
      <div className="flex items-center gap-3 w-[30%]  ">
        <BookTemplateIcon />
        <h1 className="text-xl font-bold">My Logo</h1>
      </div>

      <div className="flex items-center justify-end gap-2 w-[30%] ">
        <button className="bg-black text-white px-6 py-2.5 rounded-full text-xs">
          Sign Up
        </button>

        <button className=" border px-6 py-2.5 rounded-full text-xs font-bold">
          Login
        </button>
      </div>
    </header>
  );
}
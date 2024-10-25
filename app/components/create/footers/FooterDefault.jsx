import { BookTemplateIcon } from "lucide-react";

export default function FooterDefault() {
  return (
    <footer className="w-full bg-black mt-10">
      <div className="w-full justify-center flex gap-3 items-center text-white py-5">
        <BookTemplateIcon />
        <h1 className="text-xl font-bold">My Logo</h1>
      </div>
      <div className="">
        <div className="max-w-3xl mx-auto">
          <ul className="text-lg flex items-center  justify-center flex-col gap-3 md:flex-row md:gap-12 transition-all duration-500 py-10  className-b className-gray-200 text-white">
            <li>
              <a href="#" className=" hover:text-gray-900">
                Pagedone
              </a>
            </li>
            <li>
              <a href="#" className="  hover:text-gray-900">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="  hover:text-gray-900">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-900">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="  hover:text-gray-900">
                Support
              </a>
            </li>
          </ul>

          <span className="text-lg text-white text-center block pb-2">
            ©<a href="https://pagedone.io/">CodeSpehere</a> 2024, All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

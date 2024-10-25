export default function Nav() {
  return (
    <nav
      className=" border-b-default border-solid border-gray-200 z-10 w-full bg-inherit lg:fixed h-[8vh]"
      id="topnav"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="w-full flex flex-col lg:flex-row">
          <div
            className="hidden w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200"
            id="navbar"
          >
            <ul className="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
              <li>
                <a
                  href="javascript:;"
                  className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                >
                  About us
                </a>
              </li>
            </ul>

            <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
              <button className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                Login
              </button>
              <button className="bg-black text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

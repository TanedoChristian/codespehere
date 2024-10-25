export default function BannerDefault() {
  return (
    <main className="w-full border h-[55vh] bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col mt-16">
        <div className="w-full max-w-4xl mx-auto sm:px-12 mb-10 lg:mb-20">
          <h1 className="font-manrope font-bold text-4xl leading-snug sm:text-5xl text-center mb-5 text-black">
            The Art of Building Website Seemlessly
          </h1>
          <p className="text-xl font-medium leading-8 text-gray-400 text-center mb-14 max-w-xl mx-auto">
            New to coding? We’ve got you covered! With just a click, save time
            and streamline your projects.
          </p>
          <div className="parent flex flex-col sm:flex-row items-center max-w-xl mx-auto justify-center gap-y-4 sm:justify-between pr-2 sm:pr-1 sm:bg-white rounded-full mb-5 relative group transition-all duration-500 border border-transparent hover:border-indigo-600 focus-within:border-indigo-600">
            <input
              type="email"
              className="block w-full px-6 py-3.5 text-base max-sm:text-center font-normal shadow-xs max-sm:bg-white text-gray-900 bg-transparent border-none rounded-full placeholder-gray-400 focus:outline-none leading-normal"
              placeholder="What’s your work email?"
              required
            />
            <button className="py-3 px-6 max-sm:w-full  rounded-full bg-black text-white text-sm leading-4 font-medium whitespace-nowrap transition-all duration-300 hover:bg-indigo-700 sm:absolute top-1.5 right-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import AspectAll from "../../img/aspect-all.png";
export default function BannerOne() {
  return (
    <main className="w-full  h-[55vh] bg-gray-100">
      <div className="w-full flex   h-full">
        <div className="w-[50%]   px-20 py-16">
          <h1 className="font-manrope font-bold text-4xl leading-snug sm:text-5xl text-left mb-5 text-black">
            The Art of Building Website Seemlessly
          </h1>
          <p className="text-lg font-medium leading-8 text-gray-400 text-left mb-10 max-w-xl mx-auto">
            New to coding? We’ve got you covered! With just a click, save time
            and streamline your projects.
          </p>
          <div className="flex items-center gap-3">
            <button className="bg-black text-white px-10 py-3 ">
              Click Here
            </button>
            <button className="border px-10 py-3">Click Here</button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <Image src={AspectAll} alt="image" />
        </div>
      </div>
    </main>
  );
}

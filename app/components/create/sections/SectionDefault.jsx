import { ChartArea, ClockIcon, WalletIcon } from "lucide-react";

export default function SectionDefault() {
  return (
    <section className="w-full h-[50vh]  flex flex-col mt-10">
      <div className="mb-5 text-center">
        <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
          Our Partners
        </h2>
        <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
          Using technology to make finance simpler, smarter and more rewarding.
        </p>
      </div>

      <div className="w-full flex gap-6 justify-center px-10 py-2 cursor-pointer flex-wrap">
        <div className=" hover:bg-indigo-600 w-[30%] p-10 rounded-lg bg-gray-100">
          <div className="bg-black rounded-sm flex justify-center items-center mb-5 w-12 h-12 ">
            <WalletIcon className="text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
            Easy Payment
          </h4>
          <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
            We Provide Various Methods For You To Carry Out All Transactions
            Related To Your Finances
          </p>
        </div>
        <div className=" hover:bg-indigo-600 w-[30%] p-10 rounded-lg bg-gray-100">
          <div className="bg-black rounded-sm flex justify-center items-center mb-5 w-12 h-12 ">
            <ClockIcon className="text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
            Real Time Support
          </h4>
          <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
            We Provide Various Methods For You To Carry Out All Transactions
            Related To Your Finances
          </p>
        </div>

        <div className=" hover:bg-indigo-600 w-[30%] p-10 rounded-lg bg-gray-100">
          <div className="bg-black rounded-sm flex justify-center items-center mb-5 w-12 h-12 ">
            <ClockIcon className="text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
            Real Time Support
          </h4>
          <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
            We Provide Various Methods For You To Carry Out All Transactions
            Related To Your Finances
          </p>
        </div>
      </div>
    </section>
  );
}

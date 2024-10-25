"use client";
import CollapsibleHeader from "../components/create/CollapsibleHeader";
import CollapsibleBanner from "../components/create/CollapsibleBanner";
import CollapsibleSection from "../components/create/CollapsibleSection";
import CollapsibleFooter from "../components/create/CollapsibleFooter";
import HeaderDefault from "../components/create/headers/HeaderDefault";
import HeaderOne from "../components/create/headers/HeaderOne";
import BannerDefault from "../components/create/banners/BannerDefault";
import BannerOne from "../components/create/banners/BannerOne";
import SectionDefault from "../components/create/sections/SectionDefault";
import SectionOne from "../components/create/sections/SectionOne";
import FooterDefault from "../components/create/footers/FooterDefault";
import FooterOne from "../components/create/footers/FooterOne";
import { useSelector } from "react-redux";

export default function Page() {
  const header = useSelector((state) => state.createWeb.header);
  const banner = useSelector((state) => state.createWeb.banner);
  const section = useSelector((state) => state.createWeb.section);
  const footer = useSelector((state) => state.createWeb.footer);

  return (
    <div className="bg-[#f3f4f6]">
      <div className="p-20">
        <div className="w-full flex  gap-10 h-[80vh]  ">
          <div className="h-full  bg-white rounded-lg min-w-[18vw] shadow-md">
            <h1 className="font-bold text-gray-900 px-8 py-5">Components</h1>
            <div className=" w-full -gray-200"></div>
            <ul className="flex flex-col gap-3 p-8">
              <li>
                <CollapsibleHeader />
              </li>
              <li>
                <CollapsibleBanner />
              </li>
              <li>
                <CollapsibleSection />
              </li>
              <li>
                <CollapsibleFooter />
              </li>
            </ul>
          </div>
          <div className="h-full w-full  bg-white rounded-lg  shadow-md overflow-auto">
            {header == "default" ? (
              <HeaderDefault />
            ) : header == "one" ? (
              <HeaderOne />
            ) : (
              ""
            )}

            {banner == "default" ? (
              <BannerDefault />
            ) : banner == "one" ? (
              <BannerOne />
            ) : (
              ""
            )}

            {section == "default" ? (
              <SectionDefault />
            ) : section == "one" ? (
              <SectionOne />
            ) : (
              ""
            )}

            {footer == "default" ? (
              <FooterDefault />
            ) : footer == "one" ? (
              <FooterOne />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

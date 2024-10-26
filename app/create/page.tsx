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
import { RootState } from "../components/states/store";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';


export default function Page() {
  const header = useSelector((state: RootState) => state.createWeb.header);
  const banner = useSelector((state: RootState) => state.createWeb.banner);
  const section = useSelector((state :RootState) => state.createWeb.section);
  const footer = useSelector((state :RootState) => state.createWeb.footer);

  const { quill, quillRef: internalQuillRef } = useQuill({
    modules: {
      toolbar: [
        [{ font: [] }, { size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ['link'],
      ],
    },
  });

 



  return (
    <div className="bg-[#f3f4f6] overflow-auto">
  <div className="p-5 md:p-10">
    <div ref={internalQuillRef} className="bg-white border"></div>
    <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 h-auto md:h-[80vh] mt-5">
      <div className="h-full bg-white rounded-lg min-w-[90%] md:min-w-[18vw] shadow-md">
        <h1 className="font-bold text-gray-900 px-5 md:px-8 py-5">Components</h1>
        <div className="w-full border-b border-gray-200"></div>
        <ul className="flex flex-col gap-3 p-5 md:p-8">
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
      <div className="h-full w-full bg-white rounded-lg shadow-md overflow-auto">
        {header === "default" ? <HeaderDefault quill={quill} /> : header === "one" ? <HeaderOne /> : null}

        {banner === "default" ? <BannerDefault /> : banner === "one" ? <BannerOne /> : null}

        {section === "default" ? <SectionDefault /> : section === "one" ? <SectionOne /> : null}

        {footer === "default" ? <FooterDefault /> : footer === "one" ? <FooterOne /> : null}
      </div>
    </div>
  </div>
</div>
  );
}

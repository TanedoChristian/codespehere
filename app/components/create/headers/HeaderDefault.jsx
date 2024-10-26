import React, { useState, useEffect } from 'react';
import { BookTemplateIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderLinks } from "../../states/createWebSlice";


export default function HeaderDefault({ quill }) {
  const dispatch = useDispatch();
  const headerLinks = useSelector((state) => state.createWeb.headerLinks);
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(null);
  const [formattedLinks, setFormattedLinks] = useState(
    headerLinks.map(link => ({ text: link, html: link }))
  );

  useEffect(() => {
    if (quill) {
      const handleChange = () => {
        if (selectedLinkIndex !== null) {
          const newHTML = quill.root.innerHTML;
          const plainText = quill.getText().trim();
          const newLinks = [...formattedLinks];
          newLinks[selectedLinkIndex] = {
            text: plainText,
            html: newHTML
          };
          setFormattedLinks(newLinks);
          dispatch(setHeaderLinks(newLinks.map(link => link.html)));
        }
      };

      quill.on('text-change', handleChange);
      
      return () => {
        quill.off('text-change', handleChange);
      };
    }
  }, [quill, selectedLinkIndex, dispatch]);

  const handleLinkClick = (index, content) => {
    setSelectedLinkIndex(index);
    if (quill) {
      quill.root.innerHTML = content.html;
      quill.focus();
    }
  };

  return (
    <header className="w-full h-[8vh] flex items-center px-5 border-b shadow-sm">
      <div className="flex items-center gap-3 w-[20%]">
        <BookTemplateIcon />
        <h1 className="text-xl font-bold">My Logo</h1>
      </div>
      <div className="w-[60%] flex items-center justify-center gap-5 cursor-pointer">
        {formattedLinks.map((link, index) => (
          <a
            key={index}
            className={`hover:border-b-2 hover:border-black ${
              selectedLinkIndex === index ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleLinkClick(index, link)}
            dangerouslySetInnerHTML={{ __html: link.html }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 w-[25%]">
        <button className="bg-black text-white px-6 py-2.5 rounded-full text-xs">
          Sign Up
        </button>
        <button className="border px-6 py-2.5 rounded-full text-xs font-bold">
          Login
        </button>
      </div>
    </header>
  );
}
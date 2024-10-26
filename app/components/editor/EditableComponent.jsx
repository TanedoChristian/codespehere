import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

// Editable Component wrapper
const EditableComponent = ({ content, onSave, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleSave = () => {
    onSave(editedContent);
    setIsEditing(false);
  };

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'font',
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'align',
    'list', 'bullet',
    'indent',
    'blockquote', 'code-block',
    'link', 'image', 'video'
  ];

  return (
    <div className={`relative ${className}`}>
      {isEditing ? (
        <div className="w-full">
          {typeof window !== 'undefined' && (
            <ReactQuill 
              theme="snow"
              value={editedContent}
              onChange={setEditedContent}
              modules={modules}
              formats={formats}
              className="bg-white"
              preserveWhitespace={true}
            />
          )}
          <div className="mt-14 flex gap-2"> {/* Increased margin-top to avoid toolbar overlap */}
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div 
          className="relative group cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          <div 
            dangerouslySetInnerHTML={{ __html: editedContent }} 
            className="prose max-w-none"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all">
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white p-1 rounded shadow">
              Click to edit
            </span>
          </div>
        </div>
      )}
    </div>
  );
};


export default EditableComponent;
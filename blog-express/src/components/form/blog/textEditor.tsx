"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];

interface FieldRichTextProps {
  setFieldValue: (a: any, b: any) => void
}

const RichTextEditor: React.FC<FieldRichTextProps> = ({ setFieldValue }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: string) => {
    setValue(e);
    setFieldValue("content", e);
  };

  useEffect(() => {
    const handleScroll = () => {
      const toolbar = document.querySelector(".ql-toolbar");
      if (toolbar) {
        if (window.scrollY > toolbar.getBoundingClientRect().top) {
          toolbar.classList.add("sticky");
        } else {
          toolbar.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default RichTextEditor;

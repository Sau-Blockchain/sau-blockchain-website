import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  const onSave = () => {
    // Burada içeriği kaydeden ve backend'e gönderen bir işlem yapabilirsiniz
    console.log(content);
  };

  return (
    <div className="container">
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Bir şey yazın..."
      />
      <button className="btn btn-primary mt-3"onClick={onSave}>Kaydet</button>
    </div>
  );
};

export default RichTextEditor;

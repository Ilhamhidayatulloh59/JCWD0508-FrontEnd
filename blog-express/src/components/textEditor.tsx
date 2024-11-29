"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function TextEditor() {
  const editorConfig = {
    toolbar: {
      items: [
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "undo",
        "redo",
      ],
      viewportTopOffset: 62,
    },
    language: "en",
    placeholder: "Type something...",
  };

  return (
    <div className="w-full">
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
}

export default TextEditor;

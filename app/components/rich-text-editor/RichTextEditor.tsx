"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './RichTextEditor.css'

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = () => {

    const [ text, setText ] = useState<any | null>("");
    const [ quill, setQuill ] = useState<any | null>(null);

    if(quill) {
        const Quill = quill.default;
        let Size = Quill.import("attributors/style/size");
        Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px'];
        Quill.register(Size, true);
    }

    const quillModules = {
        toolbar: [
            [{ size: ['10px', '12px', '14px', '16px', '18px', '20px'] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }],
            [{ color: [] }],
            ['code-block'],
            ['clean'],
        ],
    };

    useEffect(() => {
        import('quill').then(QuillModule => setQuill(QuillModule));
    }, []);

    const handleNoteDataChange = (newText : any) => {
        setText(newText);
    };

    return (
        <QuillEditor
            value={text}
            onChange={(newText) => { handleNoteDataChange(newText); }}
            modules={quillModules}
            className="h-full w-full bg-white"
        />
    );
};

export default RichTextEditor;
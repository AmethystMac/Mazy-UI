"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import { Quill } from 'react-quill';
import './rich-text-editor.css';

interface NoteProps {
    note: String
};

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const Note = (props : NoteProps) => {


    // const Quill = dynamic(() =>  import('react-quill').then(module => { 
    //     alert("HERE YOU GO");
    //     return module;
    // }));

    const { note } = props;
    const [ text, setText ] = useState<any | null>("");

    let Size = Quill.import("attributors/style/size");
    Size.whitelist = ['14px', '16px', '18px'];
    Quill.register(Size, true);


    const quillModules = {
        toolbar: [
            [{ size: ['14px', '16px', '18px'] }],
            // [{ header: [1, 2, 3, 4, 5, 6] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }],
            [{ color: [] }],
            ['code-block'],
            ['clean'],
        ],
    };

    const quillFormats = [
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align',
        'color',
        'code-block',
    ];

    useEffect(() => {
        // Logic to retrieve note from database
    }, [note]);

    const handleNoteDataChange = (newText : any) => {
        setText(newText);
    };

    return (
        <div className="h-full w-full flex flex-col">
            <Header notename = { note } />
            <QuillEditor
                value={text}
                onChange={(newText) => { handleNoteDataChange(newText); }}
                modules={quillModules}
                formats={quillFormats}
                className="h-full w-full bg-white"
            />
        </div>
    );
};

export default Note;
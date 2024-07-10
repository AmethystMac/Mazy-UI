"use client";

import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Note from '../components/Note';

const page = () => {

    const [note, setNote] = useState<any | null>("");
    const [Quill, setQuill] = useState<any | null>("lol");

    // useEffect(() => {
    //     if(!Quill) {
    //         import('quill').then(module => alert(module));
    //     } else {
    //         alert("It works babyyyy")
    //     }
    // }, [Quill]);

    return (
        (Quill ? <div className="h-screen w-screen flex bg-green-600">
            <Sidebar setNote={setNote} />
            <Note note={note} />
        </div> : null)
    );
};

export default page;
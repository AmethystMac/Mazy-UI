"use client";

import { useEffect } from 'react';
import Header from './Header';
import RichTextEditor from './rich-text-editor/RichTextEditor';

interface NoteProps {
    note: String
};

const Note = (props : NoteProps) => {

    const { note } = props;

    useEffect(() => {
        // Logic to retrieve note from database
    }, [note]);

    return (
        <div className="h-full w-full flex flex-col">
            <Header notename={ note } />
            <RichTextEditor />
        </div>
    );
};

export default Note;
"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from './Header';
import Home from './Home';
import RichTextEditor from './rich-text-editor/RichTextEditor';

const Note = () => {
    
    const searchParams = useSearchParams();
    const notename = searchParams.get("notename");

    

    return (
        <div className="h-full w-full    bg-primary">
            {(
                notename ?
                <div className="h-full w-full flex flex-col gap-14    bg-primary">
                    <Header notename={notename} />
                    <RichTextEditor />
                </div> : 
                <Home />
            )}
        </div>  
    );
};

export default Note;
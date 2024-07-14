"use client";

import { useSearchParams } from 'next/navigation';
import Header from './Header';
import Home from './Home';
import RichTextEditor from './rich-text-editor/RichTextEditor';

import sidebarData from "../external/SidebarData.json";

interface Note {
    foldername: String,
    notename: String,
};

const Note = () => {
    
    const searchParams = useSearchParams();
    const noteId = searchParams.get("id");

    let noteData : Note | undefined;

    if(noteId !== null) {
        const [ folderId, id ] : String[] = noteId.split(" ");
    
        const folder = sidebarData.find((folder) => folder.id.toString() === folderId);
        const note = folder ?.notes.find((note) => note.id.toString() === id);

        noteData = { 
            foldername: folder ? folder.foldername : "Undefined",
            notename: note ? note.notename : "Undefined",
        };
    }

    return (
        <div className="h-full w-full    bg-primary">
            {(
                noteData ?
                <div className="h-full w-full flex flex-col gap-14    bg-primary">
                    <Header foldername={noteData.foldername} notename={noteData.notename} />
                    <RichTextEditor />
                </div> : 
                <Home />
            )}
        </div>  
    );
};

export default Note;
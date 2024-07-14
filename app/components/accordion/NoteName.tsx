"use client";

import { useRouter } from "next/navigation";

interface NoteProp {
    id: Number,
    notename: String,
    folderId: Number,
    selectedNote: Number,
    setSelectedNote: Function,
    draggedNote: any,
    droppingPosition: any,
    sortNotes: Function,
};

const NoteName = (props : NoteProp) => {

    const { 
        id,
        folderId,
        notename,
        selectedNote,
        setSelectedNote,
        draggedNote,
        droppingPosition,
        sortNotes,
    } = props;
    
    const router = useRouter();
    const currentNote = {
        id,
        folderId,
    };

    const openNote = () => {
        router.push("/note?id=" + folderId + "+" + id);
        setSelectedNote(id);
    };

    return (
        <div onClick={() => { openNote(); }} 
            className={`w-[14.4rem] mt-2 ml-6 p-2 ${(selectedNote != id ? "rounded-xl" : "rounded-l-xl border-2 border-r-8 border-accent")}    cursor-pointer    bg-ternary hover:border-2 hover:rounded-r-none hover:border-r-8 hover:border-secondary`} 
            draggable
            onDragStart={() => { draggedNote.current = currentNote }}
            onDragEnter={() => { droppingPosition.current = currentNote }}
            onDragEnd={() => { sortNotes(); }}
            onDragOver={(e) => e.preventDefault()}
        >
            <div className="ml-2 flex flex-col gap-1">
                <span>
                    { notename }
                </span>
                <span className="text-xs text-secondary">
                    01 Jul 2024
                </span>
            </div>
        </div>
    );
};

export default NoteName;
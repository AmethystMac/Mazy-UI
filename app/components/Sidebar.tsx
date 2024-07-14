"use client";

import { useState, useEffect, useRef } from 'react';
import FolderName from './accordion/FolderName';
import Profile from './Profile';

import AddBoxIcon from '@mui/icons-material/AddBox';

import sidebar from "../external/SidebarData.json";

const Sidebar = () => {

    const [ selectedNote, setSelectedNote ] = useState<any | null>();
    const [ sidebarData, setSidebarData ] = useState<any | null>();
    const draggedNote = useRef<any | null>();
    const droppingPosition = useRef<any | null>();

    const profile = {
        username: "Matthew Steve",
        email: "matthewtrichy@gmail.com"
    };

    const sortNotes = () => {
        const modifiedSidebarData = [...sidebarData];

        const sourceFolderIndex = sidebarData.findIndex((folder : any) => folder.id === draggedNote.current.folderId);
        const sourceNoteIndex = sidebarData[sourceFolderIndex].notes.findIndex((note : any) => note.id === draggedNote.current.id );
        const targetFolderIndex = sidebarData.findIndex((folder : any) => folder.id === droppingPosition.current.folderId);
        const targetNoteIndex = sidebarData[targetFolderIndex].notes.findIndex((note : any) => note.id === droppingPosition.current.id );

        const currentNote = modifiedSidebarData[sourceFolderIndex].notes[sourceNoteIndex];

        modifiedSidebarData[sourceFolderIndex].notes.splice(sourceNoteIndex, 1);

        modifiedSidebarData[targetFolderIndex].notes.splice(targetNoteIndex, 0, currentNote);

        console.log(sourceFolderIndex);
        console.log(sourceNoteIndex);
        console.log(targetFolderIndex);
        console.log(targetNoteIndex);

        setSidebarData(modifiedSidebarData);
    };

    const folderNameProps = {
        selectedNote,
        setSelectedNote,
        draggedNote,
        droppingPosition,
        sortNotes,
    };

    useEffect(() => {
        setSidebarData(sidebar);
    }, []);

    return (
        <div className="h-full w-[20rem] p-[2rem] flex flex-col   bg-primary">
            <div>
                <div className="flex flex-row    text-secondary">
                    <div className="text-sm font-bold translate-y-[10%]">
                        MATTHEW'S WORKSPACE
                    </div>
                    <div className="ml-auto">
                        <AddBoxIcon />
                    </div>
                </div>
                <div className='mt-4'>
                    {
                        sidebarData && sidebarData.map((folder : any, i : Number) => <FolderName {...folder} {...folderNameProps} key={i} />)
                    }
                </div>
            </div>
            <div className="mt-auto">
                <Profile {...profile}/>
            </div>
        </div>
    );
};

export default Sidebar;
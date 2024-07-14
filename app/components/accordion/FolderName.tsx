"use client";

import { useState } from "react";
import NoteName from "./NoteName";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddBoxIcon from '@mui/icons-material/AddBox';

interface FolderProp {
    id: Number,
    foldername: String,
    notes: any[],
    selectedNote: String, 
    setSelectedNote: Function,
    draggedNote: any,
    droppingPosition: any,
    sortNotes: Function,
};

const FolderName = (props : FolderProp) => {

    const { 
        id,
        foldername,
        notes,
        selectedNote,
        setSelectedNote,
        draggedNote,
        droppingPosition,
        sortNotes,
    } = props;

    const [ toggle, setToggle ] = useState<any | null>(false);

    const toggleAccordion = () => {
        setToggle(!toggle);
    };

    const noteNameProps = {
        folderId: id,
        selectedNote,
        setSelectedNote,
        draggedNote,
        droppingPosition,
        sortNotes,
    };

    return (
        <div className="mt-4    text-white">
            <div onClick={() => { toggleAccordion(); }} className="flex flex-row    cursor-pointer">
                <div>
                    {(!toggle ? <ArrowRightIcon /> : <ArrowDropDownIcon />)}
                </div>
                <div className="text-lg">
                    { foldername }
                </div>
                <div className="ml-auto">
                    <AddBoxIcon />
                </div>
            </div>
            <div>
                { 
                    toggle && notes.map((note : any, i : Number) => <NoteName {...note} {...noteNameProps} key={i} />)
                }
            </div>
        </div>
    );
};

export default FolderName;
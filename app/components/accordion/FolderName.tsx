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
    setSelectedNote: any,
};

const FolderName = (props : FolderProp) => {

    const [ toggle, setToggle ] = useState(false);
    const { id, foldername, notes, selectedNote, setSelectedNote } = props;

    const toggleAccordion = () => {
        setToggle(!toggle);
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
                { toggle ? (notes.map((note, i) => <NoteName foldername={foldername} selectedNote={selectedNote} setSelectedNote={setSelectedNote} {...note} key={i} /> )) : ( null ) }
            </div>
        </div>
    )
};

export default FolderName;
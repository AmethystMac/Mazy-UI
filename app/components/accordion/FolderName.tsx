"use client";

import { useState } from "react";
import NoteName from "./NoteName";

interface FolderProp {
    foldername: String,
    notes: any[],
    setNote: any
};

const FolderName = (props : FolderProp) => {

    const [ toggle, setToggle ] = useState(false);
    const { foldername, notes, setNote } = props;

    const toggleAccordion = () => {
        setToggle(!toggle);
    };

    return (
        <div className="mt-4    text-white" >
            <div className="cursor-pointer" onClick={() => { toggleAccordion(); }}>
                { foldername }
            </div>
            <div>
                { toggle ? (notes.map((note, i) => <NoteName foldername={foldername} {...note} setNote={setNote} /> )) : ( null ) }
            </div>
        </div>
    )
};

export default FolderName;
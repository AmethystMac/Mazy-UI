"use client";

import { useState } from "react"

interface FolderProps {
    folderName: String,
    notes: String[]
}

const Folder = (props : FolderProps) => {

    const [ toggle, setToggle ] = useState(false);
    const { folderName, notes } = props;

    const toggleAccordion = () => {
        setToggle(!toggle);
    }

    return (
        <div className="mt-4    text-white" onClick={() => { toggleAccordion(); }}>
            <div>
                { folderName }
            </div>
            <div>
                { toggle ? (notes.map((note, i) => note )) : ( null ) }
            </div>
        </div>
    )
}

export default Folder
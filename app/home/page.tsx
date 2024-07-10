"use client";

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Note from '../components/Note';

const page = () => {

    const [note, setNote] = useState<any | null>("");

    return (
        <div className="h-screen w-screen flex bg-green-600">
            <Sidebar setNote={setNote} />
            <Note note={note} />
        </div>
    );
};

export default page;
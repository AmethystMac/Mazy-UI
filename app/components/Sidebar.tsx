"use client";

import { useState } from 'react';
import FolderName from './accordion/FolderName';
import Profile from './Profile';

import AddBoxIcon from '@mui/icons-material/AddBox';

import sidebarData from "../external/SidebarData.json";

const Sidebar = () => {

    const folders = sidebarData;
    const profile = {
        username: "Matthew Steve",
        email: "matthewtrichy@gmail.com"
    }

    const [ selectedNote, setSelectedNote ] = useState<any | null>();

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
                        folders.map((folder, i) => <FolderName {...folder} selectedNote={selectedNote} setSelectedNote={setSelectedNote} key={i}/>)
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
import { useEffect } from 'react'
import FolderName from './accordion/FolderName'
import sidebarData from "../external/SidebarData.json"
import Profile from './Profile';

interface SidebarProps {
    setNote: any
};

const Sidebar = (props : SidebarProps) => {

    const { setNote } = props;

    const items = sidebarData;
    const profile = {
        username: "Matthew Steve",
        email: "matthewtrichy@gmail.com"
    }

    return (
        <div className="h-full w-[20rem] p-[2rem] flex flex-col   bg-primary">
            <div>
                <div className="font-bold text-gray-500">
                    Matthew's Workspace
                </div>
                <div className='mt-6'>
                    { items.map((item, i) => <FolderName {...item} setNote={setNote} key={i}/>) }
                </div>
            </div>
            <div className="mt-auto">
                <Profile {...profile}/>
            </div>
        </div>
    )
}

export default Sidebar
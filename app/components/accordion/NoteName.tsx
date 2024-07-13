"use client";

import { useRouter } from "next/navigation";

interface NoteProp {
    id: Number,
    foldername: String,
    notename: String,
    selectedNote: Number,
    setSelectedNote: any,
};

const NoteName = (props : NoteProp) => {

    const { id, foldername, notename, selectedNote, setSelectedNote } = props;
    const router = useRouter();

    const openNote = () => {
        router.push("/note?notename=" + foldername + " / " + notename);
        setSelectedNote(id);
    };

    return (
        <div onClick={() => { openNote(); }} className={`w-[14.4rem] mt-2 ml-6 p-2 ${(selectedNote != id ? "rounded-xl" : "rounded-l-xl border-2 border-r-8 border-accent")}    cursor-pointer    bg-ternary border-gray-500 hover:border-2 hover:rounded-r-none hover:border-r-8 hover:border-secondary`}>
            <div className="ml-2">
                <div>
                    { notename }
                </div>
                <div className="flex flex-row gap-2    text-xs text-secondary">
                    01 Jul 2024
                </div>
            </div>
        </div>
    );
};

export default NoteName;
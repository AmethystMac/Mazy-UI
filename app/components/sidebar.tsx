import React from 'react'
import Folder from './folder'

const Sidebar = () => {

    const items = [
        {
            folderName: "Active Notes",
            notes: [
                "Note1",
                "Note2",
                "Note3"
            ]
        },
        {
            folderName: "Backlog",
            notes: [
                "Note1",
                "Note2",
                "Note3"
            ]
        },
        {
            folderName: "Questions",
            notes: [
                "Note1",
                "Note2",
                "Note3"
            ]
        },
    ]

    return (
        <div className="h-full w-[16rem] p-4    bg-primary text-gray-500">
            <div className="font-bold">
                Matthew's Workspace
            </div>
            <div>
                { items.map((item, i) => <Folder {...item} key={i}/>) }
            </div>
        </div>
    )
}

export default Sidebar
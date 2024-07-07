import React from 'react'

import Sidebar from '../components/sidebar'
import Notes from '../components/notes'

const page = () => {
    return (
        <div className="h-screen w-screen flex bg-green-600">
            <Sidebar />
            <Notes />
        </div>
    )
}

export default page
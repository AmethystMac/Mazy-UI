import React from 'react';

const Home = () => {
    return (
        <div className="h-full w-full flex flex-col items-center translate-y-[40%]    text-white">
            <span className="text-[50px] font-bold">This page is feeling <span className="text-accent">lonely</span>.</span>
            <br />
            <span className="text-[20px]">Open a note or create a new note to get started!</span>
        </div>
    );
};

export default Home;
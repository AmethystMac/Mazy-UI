import React from 'react';

interface HeaderProps {
    notename: String
};

const Header = (props : HeaderProps) => {

    const { notename } = props;

    return (
        <div className="h-[6rem] w-full flex flex-col    g    text-white bg-primary">
            <div className="h-[2rem] translate-y-[30%]    text-4xl">
                { notename }
            </div>
            <div className="h-[2rem] flex flex-row gap-6 translate-y-[70%]">
                <div>
                    Matthew Steve
                </div>
                <div>
                    1 July 2024
                </div>
            </div>
        </div>
    )
}

export default Header
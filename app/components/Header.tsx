import React from 'react';
import Tag from './Tag';

import SubjectIcon from '@mui/icons-material/Subject';

import tagData from "../external/TagData.json";

interface HeaderProps {
    notename: String
};

const Header = (props : HeaderProps) => {

    const { notename } = props;
    const tags = tagData;

    return (
        <div className="h-[6rem] w-full mt-6 flex flex-col gap-2    text-white bg-primary">
            <div className="ml-4 flex flex-row gap-2">
                <SubjectIcon className="text-[90px]" />
                <div>
                    <div className="h-[2rem] translate-y-[30%]    text-4xl font-bold">
                        { notename }
                    </div>
                    <div className="h-[2rem] flex flex-row gap-6 translate-y-[70%]    text-accent">
                        <div>
                            Matthew Steve
                        </div>
                        <div>
                            1 July 2024
                        </div>
                </div>
                </div>
            </div>
            <div className="ml-6 flex flex-row gap-2">
                {
                    tags.map((tag, i) => <Tag {...tag} key={i} />)
                }
            </div>
        </div>
    );
};

export default Header;
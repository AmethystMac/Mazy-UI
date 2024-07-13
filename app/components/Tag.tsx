import React from 'react';

interface TagProps {
    text: String,
    color: String
};

const Tag = (props : TagProps) => {

    const { text, color } = props;

    return (
        <div className={"p-[5px] text-sm rounded-[5px] inline-block    font-bold    text-secondary " + color}>
            { text }
        </div>
    );
};

export default Tag;
interface NoteProp {
    foldername: String,
    notename: String,
    setNote: any
};

const NoteName = (props : NoteProp) => {

    const { foldername, notename, setNote } = props;

    const openNote = () => {
        setNote(`${ foldername } / ${ notename }`);
    };

    return (
        <div onClick={() => { openNote(); }} className="ml-4    cursor-pointer">
            { notename }
        </div>
    );
};

export default NoteName;
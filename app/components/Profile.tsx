import defaultProfilePicture from "../../public/default-profile-picture.jpg";

interface ProfileProp {
    username: String,
    email: String
}

const Profile = (props : ProfileProp) => {

    const { username, email } = props;

    return (
        <div className="flex flex-row gap-2   text-secondary">
            <div className="h-12 w-12">
                <img className="h-full w-full rounded-[50%]" src={defaultProfilePicture.src} alt="" />
            </div>
            <div className="h-12 w-[12.5rem] flex flex-col">
                <div className="overflow-hidden">
                    { username }
                </div>
                <div className="overflow-hidden">
                    { email }
                </div>
            </div>
        </div>
    )
}

export default Profile
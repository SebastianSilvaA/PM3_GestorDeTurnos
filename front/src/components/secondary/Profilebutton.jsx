import "./Profile.css"
import profileImg from "../../assets/profile.svg"

function ProfileButton () {
    return (
        <div className="profile">
            <a href="">
            <img src={profileImg} alt="Profile picture" />
            </a>
            

            
        </div>
    )
}

export default ProfileButton
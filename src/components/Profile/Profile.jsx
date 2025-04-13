import DefaultProfile from "../../assets/default/default_profile.png";
import ProfileStyle from "./Profile.styles";

/** @jsxImportSource @emotion/react */
const Profile = () => {
  return <img css={ProfileStyle} src={DefaultProfile} />;
};

export default Profile;

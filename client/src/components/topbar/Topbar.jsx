import "./topbar.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <NavLink className="navlink" to="/">
            Mernsocial
          </NavLink>
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchRoundedIcon className="searchbarIcon" />
          <input
            placeholder="Search for friend, post or video "
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
          <span className="topbarLink">
            <NavLink to="/login">Logout</NavLink>
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonRoundedIcon className="topbarIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarProfilePic">
          <NavLink className="navlink" to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
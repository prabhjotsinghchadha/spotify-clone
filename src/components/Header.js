import React from "react";
import "./Header.css";
import { useDataLayerValue } from "../DataLayer";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header({ spotify }) {
  const [{ user }] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        {/* <Avatar alt={user?.display_name} src={user?.images[0].url} /> */}
        <Avatar alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
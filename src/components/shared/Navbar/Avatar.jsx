import React, { useContext } from "react";
import  AvatarImg  from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <img
        className="rounded-full"
        src={user && user.photoURL ? user.photoURL : AvatarImg}
        width="30"
        height="30"
        alt=""
      />
    </div>
  );
};

export default Avatar;

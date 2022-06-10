import React from "react";

export const ProfileImg = (props) => {
    return (
        <div className="profile-img">
            <img src={props.path}></img>
        </div>
    )
}
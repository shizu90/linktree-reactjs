import React from "react";
import { ProfileImg } from "./profileImg";
import { ProfileInfo } from "./profileInfo";
import '../styles/linktreeHeader.css'

export const LinktreeHeader = () => {
    return (
        <div className="linktree-header">
            <ProfileImg></ProfileImg>
            <ProfileInfo info = "Full stack developer"></ProfileInfo>
        </div>
    )
}
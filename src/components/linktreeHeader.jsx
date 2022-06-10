import React, { useContext } from "react";
import { ProfileImg } from "./profileImg";
import { ProfileInfo } from "./profileInfo";
import {ManagerContext} from '../context/manager'
import '../styles/linktreeHeader.css'

export const LinktreeHeader = () => {
    const context = useContext(ManagerContext)

    return (
        <div className="linktree-header">
            <ProfileImg path = {context.img.length > 0 ? (context.img) : "https://avatars.githubusercontent.com/u/85424804?s=400&u=cc7ce2ba524d54453f2f165e939973bb349bfc0e&v=4"}></ProfileImg>
            <ProfileInfo info = {context.user.length > 0 ? (context.user) : "gabriell#0474 - shizu90"}></ProfileInfo>
        </div>
    )
}
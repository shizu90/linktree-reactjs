import React, { useContext } from "react";
import { ProfileImg } from "./profileImg";
import { ProfileInfo } from "./profileInfo";
import {ManagerContext} from '../context/manager'
import '../styles/linktreeHeader.css'

export const LinktreeHeader = () => {
    const context = useContext(ManagerContext)

    return (
        <div className="linktree-header">
            <ProfileImg></ProfileImg>
            <ProfileInfo info = {context.user.length > 0 ? (context.user) : "Gabriel - gabriell#0474 - shizu90"}></ProfileInfo>
        </div>
    )
}
import React from "react";

export const SocialItem = (props) => {
    return (
        <li className="social-item">
            <a href= {props.url}>
                {props.icon}
                {props.socialMedia}
            </a>
        </li>
    )
}
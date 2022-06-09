import React from "react";
import {MdSettings} from 'react-icons/md'
import '../styles/config.css'

const showConfig = () => {
    
}


export const Config = () => {
    return (
        <div> 
            <div className="config-center">
                <p>Settings</p>
                <MdSettings id="configIcon"></MdSettings>
            </div>
            <div className="config-page">
                <div className="change-propic">
                    <p className="config-title">
                        Change profile picture: 
                    </p>
                    <input type="file"></input> 
                </div>
                <div className="socialLink-manager">
                    <p className="config-title">
                        Add or remove social link: 
                    </p>
                    <div>
                        <ul>
                            <li>
                               <input type = "text" placeholder="Social media"></input> 
                            </li>
                            <li>
                                <input type = "text" placeholder="url"></input>
                            </li>
                        </ul>
                        <button>Add</button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
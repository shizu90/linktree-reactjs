import React, {useState, useContext} from "react";
import { ManagerContext } from "../context/manager";
import {MdSettings} from 'react-icons/md'
import '../styles/config.css'


const capitalize = (string) => {
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    return capitalizedString
}

export const Config = () => {
    const [opct, setOpct] = useState('none')
    const [social, setSocial] = useState('')
    const [url, setUrl] = useState('')

    const context = useContext(ManagerContext)

    const showConfig = (opct) => {
        if(opct == 'none'){
            setOpct('block')
        }else{
            setOpct('none')
        }
    }
    
    const manageUsername = (username) => {
        if(username.length > 0){
            context.setName(username)
        }else{
            return username
        }
    }

    const manageImage = (imagePath) => {
        context.setImage(imagePath)
    }

    const manageSocialLink = (action, media, url = '') => {
        if(media.length > 0){
            if(action === 'add'){
                context.setMedia({'media': capitalize(media), 'URL': url.toLowerCase(), 'add': true})
            }else{
                context.setMedia({'media': capitalize(media), 'URL': url.toLowerCase(), 'add': false})
            }
        }else{
            console.log('Unable to add or remove undefined social media')
        }
            
    }
    return (
        <div> 
            <div className="config-center">
                <p>Settings</p>
                <MdSettings id="configIcon" onClick={() => showConfig(opct)}></MdSettings>
            </div>
            <div className="config-page" style={{display: opct}}>
                <div className="change-propic">
                    <p className="config-title">
                        Change profile picture: 
                    </p>
                    <input type="text" placeholder = "Image URL" onChange={(e) => manageImage(e.target.value)}></input>
                    <p className="config-title">
                        Change username: 
                    </p>
                    <input type="text" placeholder="Type username" onChange={(e) => {manageUsername(e.target.value)}}></input> 
                </div>
                <div className="socialLink-manager">
                    <p className="config-title">
                        Add or remove social link: 
                    </p>
                    <div>
                        <ul>
                            <li>
                               <input type = "text" placeholder="Social media" onChange={(e) => {setSocial(e.target.value)}}></input> 
                            </li>
                            <li>
                                <input type = "e" placeholder="url" onChange={(e) => {setUrl(e.target.value)}}></input>
                            </li>
                        </ul>
                        <button onClick={() => {manageSocialLink('add', social, url)}}>Add</button>
                        <button onClick={() => {manageSocialLink('remove', social, url)}}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import { SocialItem } from "./socialItem";
import '../styles/socialList.css'
import {FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaPinterestSquare, FaPlayCircle, FaFilm} from 'react-icons/fa'

export const SocialList = (props) => {
    return (
        <ul className="social-list">
            <SocialItem 
            socialMedia = "Facebook" 
            icon = {<FaFacebookSquare className="social-icon"></FaFacebookSquare>}
            url = "https://www.facebook.com/gumiyaayimug/">
            </SocialItem>
            <SocialItem 
            socialMedia = "Github" 
            icon = {<FaGithubSquare className="social-icon"></FaGithubSquare>}
            url = "https://www.github.com/shizu90"></SocialItem>
            <SocialItem 
            socialMedia = "Instagram" 
            icon = {<FaInstagramSquare className="social-icon"></FaInstagramSquare>}
            url = "#"></SocialItem>
            <SocialItem 
            socialMedia = "Pinterest" 
            icon = {<FaPinterestSquare className="social-icon"></FaPinterestSquare>}
            url = "#"></SocialItem>
            <SocialItem 
            socialMedia = "MyAnimeList" 
            icon = {<FaPlayCircle className="social-icon"
            url = "#"></FaPlayCircle>}></SocialItem>
            <SocialItem 
            socialMedia = "Letterboxd" 
            icon = {<FaFilm className="social-icon"></FaFilm>}
            url = "#"></SocialItem>
        </ul>
    )
}
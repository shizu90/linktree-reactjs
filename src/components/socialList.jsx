import React, { useContext } from "react";
import { SocialItem } from "./socialItem";
import '../styles/socialList.css'
import {ManagerContext} from '../context/manager'
import {FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaPinterestSquare, FaPlayCircle, FaFilm, FaTwitterSquare, FaSteamSquare} from 'react-icons/fa'

export const SocialList = (props) => {
    const context = useContext(ManagerContext)
    const availableIcons = ['Facebook', 'Twitter', 'Pinterest', 'Instagram', 'Github', 'Steam']
    const socialMedias = [<SocialItem 
        socialMedia = "Facebook" 
        icon = {<FaFacebookSquare className="social-icon"></FaFacebookSquare>}
        url = "https://www.facebook.com/gumiyaayimug/">
        </SocialItem>,
        <SocialItem 
        socialMedia = "Github" 
        icon = {<FaGithubSquare className="social-icon"></FaGithubSquare>}
        url = "https://www.github.com/shizu90"></SocialItem>,
        <SocialItem 
        socialMedia = "Instagram" 
        icon = {<FaInstagramSquare className="social-icon"></FaInstagramSquare>}
        url = "https://www.instagram.com/gabriell99.9/"></SocialItem>,
        <SocialItem 
        socialMedia = "Twitter" 
        icon = {<FaTwitterSquare className="social-icon"></FaTwitterSquare>}
        url = "https://www.twitter.com/gumiya90"></SocialItem>,
        <SocialItem 
        socialMedia = "MyAnimeList" 
        icon = {<FaPlayCircle className="social-icon"></FaPlayCircle>}
        url = "https://myanimelist.net/profile/Gumiya"></SocialItem>,
        <SocialItem 
        socialMedia = "Letterboxd" 
        icon = {<FaFilm className="social-icon"></FaFilm>}
        url = "https://letterboxd.com/gabriell9090/"></SocialItem>]
    
    const addSocialLink = (context) => {
        if(Object.entries(context.data).length > 0){
            if(context.data.add === true){
                socialMedias.push(<SocialItem socialMedia = {context.data.media} url = {context.data.URL}></SocialItem>)
            }else{
                socialMedias.map((item, index) => {
                    if(item.props.socialMedia === context.data.media){
                        socialMedias.splice(index, 1)
                    }
                })
            }
        }
    }
        
    return (
        <ul className="social-list">
            {socialMedias.map((item) => (item))}
        </ul>
    )
}
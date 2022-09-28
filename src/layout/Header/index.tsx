import React from "react";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Logo from "../../assests/icons/logo.png"
import "./styles.scss"
import { EMAIL_LINK, INSTAGRAM_LINK } from "../../common/constants";

type Tprops = {

}

export const Header: React.FC<Tprops> = () => {

    const location = useLocation()
    const navBarMenu = [{ label: "Projects", route: "/projects" }, { label: "Services", route: "/services" }, { label: "Contact", route: "/contact-us" }, { label: "About", route: "/about" }, {}]

    window.onscroll = function(){
        if(window.pageYOffset > 100){
            document.querySelector(".header")?.classList.add("active")
        }else{
            document.querySelector(".header")?.classList.remove("active")
        }
    }

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div className="nav-bar-container">
                    {navBarMenu.map((data, index: number) => <span key={index} className="nav-links">
                        <Link to={`${data.route}`} style={location.pathname === data.route ? { textDecoration: "underline" } : {}}>{data.label}</Link>
                    </span>)}
                </div>
                <div className="social-media-share">
                    <a className="icon" href={EMAIL_LINK} target="_blank" aria-label="tridentbuilders@gmail.com">
                        <EmailIcon style={{ color: "#fff" }} />
                    </a>
                    <a className="icon" href={INSTAGRAM_LINK} target="_blank" >
                        <InstagramIcon style={{ color: "#fff" }} />
                    </a>
                    <a className="icon" href="mailto:tridentbuilders@gmail.com" target="_blank" aria-label="tridentbuilders@gmail.com">
                        <PinterestIcon style={{ color: "#fff" }} />
                    </a>
                </div>
            </div>
        </header>
    )
}
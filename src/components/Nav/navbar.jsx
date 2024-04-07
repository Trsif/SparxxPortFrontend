import React, {useEffect, useState} from "react";
import axios from "axios";
import './navbar.css'


const Navbar =() =>{
    const [socialLinks,setSocialLinks] = useState([])
    const authToken ='6198f424e1b81a6f40011988a5c6c3a96f0b0a4ac4be31475fafdcd06ce7409a2bbcf9d23f27610ffa84b79acd3f1372654d68737fbd2206730768e5067834278a866277d406d89988a240fb6cae8da418b4f157e8db663a6411b90a3553fee42dc9f9effbaff9e67b1b7806869bdbf3dc04eaa6546e54aba716a4a6d307fdad'
    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const response = await axios.get('http://localhost:1337/api/Socials', {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
                setSocialLinks(response.data.data);
            } catch (error) {
                console.error('Error fetching social links:', error);
            }
        };

        fetchSocialLinks(); // Call the fetch function inside useEffect
    }, []);

    console.log(socialLinks)
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
            <ul className="nav-links-socials" >
                {socialLinks.map((social)=>{
                    return(
                        <li key={social.id}>
                            <a  href={social.attributes.url}> <img  className="social-icon" src={social.attributes.img_url}  alt={social.attributes.name} /> </a>

                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Navbar
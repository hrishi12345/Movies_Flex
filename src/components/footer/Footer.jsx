import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                "🎬 Welcome to MoviesFlex, Your Ultimate Movie Destination! 🌟

At MoviesFlex, we're not just a website; we're your cinematic haven, a place where movie magic happens. Our passion for movies knows no bounds, and we've poured that love into every pixel of this website. As you explore our virtual movie realm, you're in for an adventure like no other.

🍿 A World of Movies Awaits You 🎥

Get ready to dive into the mesmerizing world of cinema. From timeless classics to the latest blockbusters, we've curated an extensive library of movies that cater to all tastes. Whether you're a die-hard fan of heartwarming dramas, spine-tingling thrillers, or laugh-out-loud comedies, we've got you covered. And for the cinephiles always on the hunt for hidden gems, our handpicked selections are sure to delight.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
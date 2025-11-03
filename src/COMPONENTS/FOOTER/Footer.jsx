import React from 'react';
import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import youtube from '../../assets/youtube_icon.png'



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <img src={facebook} alt=""/>
                <img src={twitter} alt=""/>
                <img src={instagram} alt=""/>
                <img src={youtube} alt=""/>
            </div>
            <div>
                <ul>
                    <li>Audio Description</li>
                    <li>Help Center</li>
                    <li>Gift Center</li>
                    <li>Media center</li>
                    <li>Investor Relations</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>About Netflix</li>
                    <li>Privacy</li>
                    <li>Legal Notices</li>
                    <li>Cookie Preferences</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <p className="copyright-text">Copyright &copy; E: brianmuturo5@gmail.com Netflix 1999-2025</p>
        </div>
    )
}

export default Footer;
import React from 'react';
import './Home.css';
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';
import BANNER from '../../assets/banner 4.jpg'
import BANNER2 from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from "../../COMPONENTS/TITLECARDS/TitleCards.jsx";
import Footer from "../../COMPONENTS/FOOTER/Footer.jsx";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="hero">
                <img src={BANNER} alt="" className="hero-image"/>
                <div className="hero-caption">
                    <img src={BANNER2} alt="" className="caption-image"/>
                    <p>A woman's daring sexual past collides with her married-with-kids present when the bad-boy
                        ex she can't stop fantasizing about crashes back into her life.
                    </p>
                    <div className="hero-btn">
                        <button className="btn">
                            <img src={play_icon} alt=""/>play
                        </button>
                        <button className="btn dark-btn">
                            <img src={info_icon} alt=""/>more info
                        </button>
                    </div>
                    <TitleCards/>
                </div>
                </div>
            <div className="more-cards">
                <TitleCards title={"Trending Now"} category={"top_rated"}/>
                <TitleCards title={"Netflix Originals"} category={"popular"}/>
                <TitleCards title={"Tv Shows"} category={"upcoming"}/>
                <TitleCards title={"Movies"} category={"now_playing"}/>
            </div>
            <Footer/>
        </div>
    )
}


export default Home;
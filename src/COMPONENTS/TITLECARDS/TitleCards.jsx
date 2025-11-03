import React, {useRef, useEffect, useState} from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data.js'
import {Link} from 'react-router-dom'


const TitleCards = ({title, category}) =>{
    const cardsRef = useRef();
    const [apiData, setApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDQyMzUyOGQwNjNiNjNkOWQxMGJkYjljODA0NmE0NSIsIm5iZiI6MTc1MDI1MTAzMy4wMjQ5OTk5LCJzdWIiOiI2ODUyYjYxOTVlMzBhNzU1ZThmYjUxNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pdG4iSS7K_n8vh44hF6-2dNvT4pVrvQbSniKKOYQgn4'
        }
    };

    const handleWheel = (event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel',handleWheel)
    },[])
    return(
        <div className='title-cards'>
            <h2>{title ? title : "Popular On Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {
                    apiData.map((card, index) => {
                        return <Link to={`/player/${card.id}`} className="card" key={index}>
                            <img src={'https://image.tmdb.org/t/p/w500'+ card.backdrop_path} alt=""/>
                            <p>{card.original_title}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default TitleCards;
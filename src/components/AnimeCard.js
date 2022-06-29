import React from 'react'
import classes from "./AnimeCard.module.css"

const AnimeCard = (props) => {
    return <article className={classes.animeCard}>
        <a href="">
            <figure>
                <img src={props.anime.image_url} alt="anime imgae" />
            </figure>
            <h3> {props.anime.title}</h3>
        </a>

    </article>

}

export default AnimeCard
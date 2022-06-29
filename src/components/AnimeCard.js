import React from 'react'

const AnimeCard = (props) => {
    console.log(props.anime.image_url)
    return <article className='animeCard'>
        <a href="">
            <figure>
                <img src={props.anime.imgae_url} alt="anime imgae" />
            </figure>
            <h3> {props.anime.title}</h3>
        </a>

    </article>

}

export default AnimeCard
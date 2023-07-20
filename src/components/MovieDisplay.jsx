
import React from 'react'
import Form from './Form'
function MovieDisplay(props) {

    const loaded = ()=>{
        return (
            <>
        <h1 className='header1'>{props.movie.Title}</h1>
        <h1>{props.movie.Year}</h1>
        <h1 className='rating'>Rated: {props.movie.Rated}</h1>
        <hr/>
        <img className='coverImg' src={props.movie.Poster}/>
        <h3 className='cast'>Starring: {props.movie.Actors}</h3>
        <h2 className='award'>Box Office: {props.movie.BoxOffice}</h2>
        <hr/>
        <h1 className='plott'>{props.movie.Plot}</h1>
            </>
            )
        }

        const loading =()=>{
            return <h1>No Movie To Display</h1>
        }

        return props.movie ? loaded() : loading();
    }

  


export default MovieDisplay
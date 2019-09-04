import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

 generateMovieCards = () => {
    return movieData.map(data => {
      return (
        <div>
          <MovieCard 
            movieTitle={data.title} 
            movieRating={data.IMDBRating}
            movieGenres={data.genres}
            moviePoster={data.poster} />
        </div>
      )
  })
 }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

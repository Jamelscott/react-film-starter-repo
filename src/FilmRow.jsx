import React, { Component } from 'react';

class FilmRow extends Component {
  render() {
    return (
      <div className="film-row">
        <img src={`https://images.tmdb.org/t/p/w780${this.props.film.poster_path}`} alt={`Poster for the film ${this.props.film.title}`} />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date.substring(0, 4)}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
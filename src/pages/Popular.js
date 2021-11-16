import React, { Component } from 'react'
import Card from '../Card'

export default class Popular extends Component {
    constructor() {
        super()
        this.state = {
            movies : []
        }
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=747f31256b14e6163aa7b59d992c5bc5")
          .then(response => response.json())
          .then(result => {
            this.setState({ movies: result.results})
          })
      }
    render() {
        console.log(this.state.movies);
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {this.state.movies.map((movie,index) => {
                        return <Card 
                                    imageSource = {`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                    title = {movie.title} 
                                    releaseDate ={movie.release_date} 
                                    description = {movie.overview}
                                    key= {movie.id}
                                />      
                    })}
                </div>
                
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import Card from '../Card'

export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            movies : [],
            favIDs : this.getStorage()
        }
        this.getStorage= this.getStorage.bind(this)
        this.getMovie= this.getMovie.bind(this)

    }
    componentDidMount() {
        // console.log("fav",this.state.favIDs);
        // if(this.state.movies.length !== 0) {
            this.state.favIDs.forEach( id => {
                this.getMovie(id)     
            });
        // }
        
    }
    getStorage() {
        const favoris = JSON.parse(localStorage.getItem("favorites"))
        if(!favoris) {
            return []
        }
        return favoris
    }
    getMovie(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=747f31256b14e6163aa7b59d992c5bc5`)
          .then(response => response.json())
          .then(result => {
            this.setState({ movies: [result, ...this.state.movies]})
        })
    }
    render() {
        console.log("movie",this.state.movies);
        // console.log("favId",this.state.favIDs);
        if(this.state.movies.length === 0) {
            return <div className="container">
                <div className="row mt-5">
                    <h1 className="col d-flex justify-content-center mt-5">il ya pas de favoris</h1>
                </div>
            </div>
        }
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {this.state.movies.map((movie,index) => {
                        return <Card 
                                    imageSource = {`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                    title = {movie.title} 
                                    releaseDate ={movie.release_date} 
                                    description = {movie.overview}
                                    key= {index}
                                />      
                    })}
                </div>
                
                
            </div>
        )
    }
}

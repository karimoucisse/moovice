import React, { Component } from 'react'
import Card from '../Card'

export default class PopularBattle extends Component {
    constructor() {
        super()
        this.state = {
            movies : [],
            currentBattle : 0
        }
        this.onclickCard = this.onclickCard.bind(this)
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=747f31256b14e6163aa7b59d992c5bc5")
          .then(response => response.json())
          .then(result => {
            this.setState({ movies: result.results})
        })
    }
    onclickCard(id) {
        this.setState({currentBattle : this.state.currentBattle +2})
        const getFavoritesLocaStorage =  localStorage.getItem("favorites")
    
        let favoris = [id]
        if(getFavoritesLocaStorage){
            favoris = JSON.parse(getFavoritesLocaStorage)
            favoris.push(id)
            // console.log("mes favoris",favoris);
        }

        localStorage.setItem("favorites",JSON.stringify(favoris)) 

        // let favorites = JSON.parse(localStorage.getItem("favorites")) || []
        // favorites.push(id)
        // localStorage.setItem("favorites",JSON.stringify(favorites)) 
    }
    
    render() {
        // console.log("movies:",this.state.movies);
        // console.log("movie1:",this.state.movies[0]);
        // console.log("movie2:",this.state.movies[1]);
        if(this.state.movies.length === 0) {
            return <div className="container">
                <div className="row mt-5">
                    <h1 className="col d-flex justify-content-center mt-5">il ya pas de film</h1>
                </div>
            </div>
        }

        return (
            <div className="container">
               {this.state.currentBattle < this.state.movies.length 
               ?<div className="row d-flex justify-content-center">
                    <Card   imageSource = {`https://image.tmdb.org/t/p/w300/${this.state.movies[this.state.currentBattle].poster_path}`}
                            title = {this.state.movies[this.state.currentBattle].title} 
                            releaseDate ={this.state.movies[this.state.currentBattle].release_date} 
                            description = {this.state.movies[this.state.currentBattle].overview}
                            onclickCard={() => this.onclickCard(this.state.movies[this.state.currentBattle].id)}
                    />
                    <Card   imageSource = {`https://image.tmdb.org/t/p/w300/${this.state.movies[this.state.currentBattle + 1].poster_path}`}
                            title = {this.state.movies[this.state.currentBattle + 1].title} 
                            releaseDate ={this.state.movies[this.state.currentBattle + 1].release_date} 
                            description = {this.state.movies[this.state.currentBattle + 1].overview}
                            onclickCard= {() => this.onclickCard(this.state.movies[this.state.currentBattle + 1].id)}
                    />
                    
                </div>
                :<div className="d-flex justify-content-center">
                    <h1>Vous avez parcouru tous les films !</h1>
                </div>}
            </div>
        )
    }
}

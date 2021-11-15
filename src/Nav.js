import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav d-flex justify-content-center fs-4 my-4">
                <Link to= "/favorites" className="nav-link active">Home</Link>
                <Link to ="/weekly" className="nav-link">Weekly</Link>
                <Link to = "/weeklyBattle" className="nav-link">Weekly-battle</Link>
                <Link to = "/popular" className="nav-link">Popular</Link>
                <Link to = "/popularBattle" className="nav-link">Popular-battle</Link>
                <Link to = "/favorites" className="nav-link">Favorites</Link>
            </nav>
        )
    }
}
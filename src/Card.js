import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {title,releaseDate} = this.props
        return (
            <div>
                <div className="card col-3" >
                <img src="https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}, {releaseDate}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        )
    }
}

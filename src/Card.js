import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {title,releaseDate,description,imageSource,onclickCard} = this.props
        return (
            <div className="col-3 mx-3" 
                onClick={onclickCard}>
                <div className="card" >
                    <img src={imageSource} 
                        className="card-img-top img-fluid img-thumbnail" 
                        alt=""
                        style = {{height:"300px"}}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p>{releaseDate}</p>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

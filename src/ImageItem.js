import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="individualAnimal">
                <div>{this.props.title}</div>
                <p>{this.props.description}</p>
                <img className="animalImage" src={this.props.url} alt={this.props.title}/>
                <div>{this.props.horns} horns</div>
            </div>
        )
    }
}
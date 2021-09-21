import React, { Component } from 'react'
import images from './data.js'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {
        return (
            <div className="allAnimals">
        {images.map((image) => {
            return (
                <ImageItem 
                    title={image.title} 
                    description={image.description} 
                    url={image.url}
                    horns={image.horns}
                    />
                )}
                )}
            </div>
            )
        }
}
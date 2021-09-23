import './App.css';
import images from './data.js';
import React, { Component } from 'react'
import Header from './Header.js';
import Dropdown from './Dropdown';

class App extends Component {

  state = { keyword: '',
            horns: ''
          }


  keywordChange = (e) => {
  this.setState({ keyword: e.target.value })
  }

  hornChange = (e) => {
    this.setState({ horns: Number(e.target.value) })
    }

  render() {

    let keywordsArray = []
    for (let image of images) {
      if (!keywordsArray.includes(image.keyword))
      keywordsArray.push(image.keyword)
    }
    let hornsArray = []
    for (let image of images) {
      if (!hornsArray.includes(image.horns))
      hornsArray.push(image.horns)
    }

    const filterImages = images.filter(animal => {
      if (!this.state.keyword){
      return true
      }
      return animal.keyword === this.state.keyword
      }
        ).filter(animal => {
          if (!this.state.horns){
          return true
          }
          return animal.horns === this.state.horns
          }
        )

  return (
    <>
    <Header />
    <div className="subhead">
      <div>
        Select your favorite type: 
        <Dropdown 
        options = {keywordsArray}
        handleChange = {this.keywordChange}
        />
        </div>
        <div>
          and/or number of horns
          <Dropdown 
        options = {hornsArray}
        handleChange = {this.hornChange}
        />
        </div>

    </div>
      <ImageList 
      filteredImages = {filterImages}
      />
    </>
  );
}
}

class ImageItem extends Component {
  render() {
      return (
          <li className="individualAnimal" key={this.props.keyword}>
              <h5>The {this.props.horns} horned {this.props.title}</h5>
              <img className="animalImage" src={this.props.url} alt={this.props.title}/>
              <p className="description">{this.props.description}</p>
          </li>
      )
  }
}

class ImageList extends Component {
  render() {
      return (
          <ul className="allAnimals">
      {this.props.filteredImages.map((image) => {
          return (
              <ImageItem 
                  title={image.title} 
                  description={image.description} 
                  url={image.url}
                  horns={image.horns}
                  />
              )}
              )}
          </ul>
      )}}

export default App;

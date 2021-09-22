import './App.css';
import images from './data.js';
import React, { Component } from 'react'
import Header from './Header.js';

class App extends Component {

  state = { keyword: "" }
  animalChange = (e) => {
  this.setState({ keyword: e.target.value })
  }
  render() {
    const filterImages = images.filter(animal => {
      if (!this.state.keyword) {
      return true
      }
      return animal.keyword === this.state.keyword
      }
        )
  return (
    <>
    <Header />
    <div className="subhead">
      <div>Select your favorite type: 
        <select onChange={this.animalChange}>
          <option value=""></option>
          <option value="narwhal">narwhal</option>
          <option value="rhino">rhino</option>
          <option value="unicorn">unicorn</option>
          <option value="unilego">unilego</option>
          <option value="triceratops">triceratops</option>
          <option value="markhor">markhor</option>
          <option value="mouflon">mouflon</option>
          <option value="addax">addax</option>
          <option value="chameleon">chameleon</option>
          <option value="lizard">lizard</option>
          <option value="dragon">dragon</option>
        </select>
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
          <div className="individualAnimal">
              <h5>The {this.props.horns} horned {this.props.title}</h5>
              <img className="animalImage" src={this.props.url} alt={this.props.title}/>
              <p className="description">{this.props.description}</p>
          </div>
      )
  }
}

class ImageList extends Component {
  render() {
      return (
          <div className="allAnimals">
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
          </div>
      )}}

export default App;

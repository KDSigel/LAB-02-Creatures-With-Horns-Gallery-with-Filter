import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleChange}>
                    <option value=''>all</option>
                    {this.props.options.map((image) => {
          return (
              <option value={image}>{image}</option>
              )}
              )}
                </select>
            </>
        )
    }
}

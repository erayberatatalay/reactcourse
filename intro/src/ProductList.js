import React, { Component } from 'react';

export default class componentName extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
      </div>
    );
  }
}

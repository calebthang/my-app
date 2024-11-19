import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <div className="hello-world">
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

export default HelloWorld;
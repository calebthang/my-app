import React, { Component } from 'react';

class List extends Component {
  renderList() {
    return this.props.items.map(item => (
      <li key={item.name} className="list-item">
        {item.name} - {item.type}
      </li>
    ));
  }

  render() {
    return (
      <ul className="items-list">
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
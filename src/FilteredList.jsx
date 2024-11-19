import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onSelect = (eventKey) => {
    this.setState({ type: eventKey });
  }

  filterItem = (item) => {
    const searchMatch = item.name.toLowerCase().includes(this.state.search);
    const typeMatch = this.state.type === "All" || item.type === this.state.type;
    return searchMatch && typeMatch;
  }

  render() {
    return (
      <div className="filtered-list">
        <div className="filter-controls">
          <input 
            type="text" 
            placeholder="Search" 
            onChange={this.onSearch}
            className="search-input"
          />
          
          <Dropdown onSelect={this.onSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Type: {this.state.type}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
              <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
              <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
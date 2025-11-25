
import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ''
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  }

  handleAddItem = () => {
    const { item, list } = this.state;
    if (item.trim() !== '') {
      this.setState({
        list: [...list, item],
        item: ''
      });
    }
  }

  render() {
    return (
      <div style={{ width: '400px', margin: '50px auto', textAlign: 'center' }}>
        <h2>Todo List</h2>
        <input 
          type="text" 
          value={this.state.item} 
          onChange={this.handleChange} 
          placeholder="Nhập công việc..."
          style={{ padding: '5px', width: '70%' }}
        />
        <button 
          onClick={this.handleAddItem} 
          style={{ padding: '5px 10px', marginLeft: '10px' }}
        >
          Add
        </button>

        <ul style={{ textAlign: 'left', marginTop: '20px' }}>
          {this.state.list.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;

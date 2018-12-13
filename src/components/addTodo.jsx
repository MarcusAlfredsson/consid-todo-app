import React from 'react';

class AddTodo extends React.Component {
  state = { text: '' };
  
  onInputChange = () => {
    // TODO Step 1: save string in state
  };

  addTodo = () => {
    // TODO Step 2: send string to App component to add todo to the state of todos
    // empty text state
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onInputChange} />
        <button type="button" onClick={this.addTodo}>add me</button>
      </div>);
  }
}

export default AddTodo;
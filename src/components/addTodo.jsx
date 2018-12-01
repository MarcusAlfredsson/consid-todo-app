import React from 'react';

class addTodo extends React.Component {
  state = { input: '' };
  
  onInputChange = () => {};

  addTodo = () => {};

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={this.onInputChange} />
        <button type="button" onClick={this.addTodo}>add me</button>
      </div>);
  }
}

export default addTodo;
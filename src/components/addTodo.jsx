import React from 'react';

class addTodo extends React.Component {
  state = { text: '' };
  
  onInputChange = () => {
    // TODO Steg 1: ska spara strängen ifrån inputen i state variabeln text
  };

  addTodo = () => {
    // TODO Steg 1: ska skicka upp event om att lägga till todo i listan todos i app komponenten
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onInputChange} />
        <button type="button" onClick={this.addTodo}>add me</button>
      </div>);
  }
}

export default addTodo;
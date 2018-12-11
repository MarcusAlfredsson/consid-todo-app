import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('app component', () => {
  it('addTodo when called then add new item to todos', () => {
    const app = renderer.create(<App />);
    const componentInstance = app.getInstance();
    componentInstance.setState({ inputText: 'test', todos: [] });
    componentInstance.addTodo();
    expect(componentInstance.state.todos.length).toBe(1);
    expect(componentInstance.state.todos[0]).toBe('test');
  });
  it('snapshot that template adds more todos', () => {
    const app = renderer.create(<App />);
    const componentInstance = app.getInstance();
    componentInstance.setState({ todos: ['test snapshot']});
    expect(app).toMatchSnapshot();
  });
});  


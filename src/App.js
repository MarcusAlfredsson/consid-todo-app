import React, { Component } from 'react';
import logo from './logo.svg';
import * as style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <div className={style['App-header__title']}>
          Todo app
        </div>
        <div className={style['App-header__symbol']}>
          <img src={logo} className={style['App-logo']} alt="logo" />
        </div>
        <div className={style.content}>
        test content
        </div>
      </div>
    );
  }
}

export default App;

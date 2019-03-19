import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from './routes/index';
import configureStore from './store/configureStore';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore.store}>
        <Router history={configureStore.history}>
          <Routes/>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);

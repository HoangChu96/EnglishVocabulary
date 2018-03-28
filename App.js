import React, { Component } from 'react';
import Main from './Components/Main';
import store from './Components/redux/store';
import { Provider } from 'react-redux';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

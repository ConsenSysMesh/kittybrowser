import React, { Component } from 'react';
import { DrizzleProvider } from 'drizzle-react'
import Loading from './containers/Loading';
import Browser from './components/Browser';
import './App.css';

class App extends Component {
  render() {
    const drizzleOptions = {
      contracts: []
    };

    return (
      <DrizzleProvider options={drizzleOptions}>
        <Loading>
          <Browser />
        </Loading>
      </DrizzleProvider>
    );
  }
}

export default App;

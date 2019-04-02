import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import Home from './components/Home';
import ProductPage from './components/ProductPage';

import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
      this.setState({ data: data });
  }

  render() {
    return (
      <div className="App">
        <NavWrapper data={this.state.data} />
        <Route exact path='/' component={Home} />
        <Route path='/:id' component={ProductPage} />
      </div>
    );
  }
}

export default App;

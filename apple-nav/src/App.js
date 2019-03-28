import React, { Component } from 'react';
import NavWrapper from './components/NavWrapper';
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
      </div>
    );
  }
}

export default App;

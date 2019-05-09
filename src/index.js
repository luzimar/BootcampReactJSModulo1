import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';
import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  // Arrow function não sobrepõe o escopo da classe
  handleClick = () => {
    // Sobrepondo uma variável no estado pois o estado é imutavel,
    // não funciona alterando seu valor diretamente
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <Fragment>
        <h1>RocketSeat</h1>
        <h2>{counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

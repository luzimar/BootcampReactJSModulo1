<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';
import './style.scss';
=======
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

class Button extends Component {
  
  static defaultProps = {
    children: 'Salvar'
  }

  //Adicionando validações para propriedades
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  }

  render() {
    return (
            <button onClick={this.props.onClick}>
               {this.props.children}
            </button>
           )
  }
}


>>>>>>> 9bb58059ddd0d4828c4db885c4419d56c67c06d5

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

<<<<<<< HEAD
render(<App />, document.getElementById('app'));
=======
render (<App />, document.getElementById('app'))
>>>>>>> 9bb58059ddd0d4828c4db885c4419d56c67c06d5

import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrap />
        <CatchWrap />
      </div>
    );
  }
}

// sentence wrapper

class Wrap extends Component {
    render() {
        return (
            <div className="App-wrap">
                <Paragraph text="Jimmy&nbsp;" />
                <Paragraph text="Amash&nbsp;" />
                <Paragraph text="is&nbsp;" />
                <Paragraph text="a&nbsp;" />
                <Noun color="red" text="developer&nbsp;" />
                <Noun color="green" text="product&nbsp;" />
                <Noun color="green" text="maker&nbsp;" />
                <Noun color="blue" text="aspiring&nbsp;" />
                <Noun color="blue" text="polymath&nbsp;" />
                <Paragraph text=" and&nbsp;" />
                <Noun color="purple" text="mild yogi&nbsp;" />
            </div>
        )
    }
}

// setting up nouns

class Noun extends Component {
    render() {
        return (
            <h3 className={`App-noun App-noun--${ this.props.color }`}>{this.props.text}</h3>
        )
    }
}

// creating a paragraph that wraps nouns

class Paragraph extends Component {
    render() {
        return (
            <h3 className="App-paragraph">{this.props.text}</h3>
        )
    }
}

// contact wrap

class CatchWrap extends Component {    render() {
        return (
            <div className="App-catch-wrap">
                <CatchWrapSocial social="envelope" url="mailto:jimmyamash@gmail.com" />
                <CatchWrapSocial social="product-hunt" url="https://producthunt.com/@jimmyamash"/>
                <CatchWrapSocial social="twitter" url="https://twitter.com/jimmyamash"/>
                <CatchWrapSocial social="facebook" url="https://facebook.com/jimmyamash" />
                <CatchWrapSocial social="github" url="https://github.com/jimmyamash"/>
                <CatchWrapSocial social="medium" url="https://medium.com/@jimmyamash"/>
            </div>
        )
    }
}

// contact social links

class CatchWrapSocial extends Component {
    render() {
        return (
            <a target="_blank" className={`App-catch-wrap-social App-catch-wrap-social--${ this.props.social } fa fa-${ this.props.social }`} href={`${ this.props.url }`}></a>
        )
    }
}

export default App;

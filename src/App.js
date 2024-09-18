import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classnames from 'classnames';
import logo from './logo.svg';
import './App.css';

// todo create pages with router
// todo create states
// todo remove CatchWrapSocial and other Catch stuff, just convert to wraps and links

// app

class App extends Component {
  render() {
    return (
        <div className="App container">
            <div className="row">
                <Wrap type="image" size="col-md-12" color="transparent" title="false"/>
                {/* <Wrap type="headline" text="Jimmy Amash is a developer, product maker, aspiring polymath and mild yogi" size="col-md-12" color="transparent" title="true" />
                <Wrap type="link" text="Currently @Acorns" icon="false" iconname="file" linkto="https://twitter.com/acorns" size="col-md-12" color="transparent" title="false" /> */}
                <Wrap type="content" size="col-md-12" color="black" title="false" />
                {/* <Wrap type="headline" text="Built with React" size="col-md-12" color="transparent" title="true" /> */}
            </div>
        </div>
    );
  }
}

// sentence wrapper

class Wrap extends Component {
    render() {
        return (
            <div className={`App-wrap App-wrap--${ this.props.color } ${ this.props.size } App-wrap--${ this.props.type }`} >
                <div className="App-wrap__inner">
                    {this.props.title == "true" &&
                        <Title text={this.props.text} />
                    }
                    {this.props.type == "image" &&
                        <Image size="small" source="me.svg" />
                    }
                    {this.props.type == "link" &&
                        <Link target="_blank" text={this.props.text} linkto={this.props.linkto} icon={this.props.icon} iconname={this.props.iconname} />
                    }
                    {this.props.type == "content" &&
                        <div>
                            <div>
                                <h2>The Manifesto</h2>
                                {/* <h3>Seek more by seeking less, as those who chase time never reach its tail, as the tail was only a manifestation within constraints of the reality you created.</h3> */}
                                <h3>You are where you need to be. That of which you lack, you already have, you are only not experiencing it.</h3>
                                <h3>Currently<a class='block-link' href='https://tryrobin.com'>@Robin</a></h3>
                                <h3>Advisor<a class='block-link' href='https://funnelcakeclub.com'>@Funnelcake</a></h3>
                            </div>
                            <div>
                                <CatchWrapSocial social="envelope" url="mailto:jimmyamash@gmail.com" />
                                {/* <CatchWrapSocial social="instagram" url="https://instagram.com/jimmyamash"/> */}
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

// title

class Title extends Component {
    render() {
        return (
            <div>
                <Paragraph text={this.props.text} />
            </div>
        )
    }
}

// images

class Image extends Component {
    render() {
        return (
            <div>
                {this.props.size == "small" &&
                    <img className="App-wrap__image--small" src={`img/${ this.props.source }`} />
                }
                {this.props.size == "medium" &&
                    <img className="App-wrap__image--medium" src={`img/${ this.props.source }`} />
                }
                {this.props.size == "large" &&
                    <img className="App-wrap__image--large" src={`img/${ this.props.source }`} />
                }
            </div>
        )
    }
}

// setting up links

class Link extends Component {
    render() {
        return (
            <a href={this.props.linkto} target="_blank" className={`App-link App-link--block`}>
            {this.props.text}
            {this.props.icon == "true" &&
                <i className={`fa fa-${ this.props.iconname }`}></i>
            }
            </a>
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

// contact social links

class CatchWrapSocial extends Component {
    render() {
        return (
            <a target="_blank" className={`App-wrap__social-link App-wrap__social-link--${ this.props.social } fa fa-2x fa-${ this.props.social }`} href={`${ this.props.url }`}></a>
        )
    }
}

export default App;

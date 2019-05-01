import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classnames from 'classnames';
import logo from './logo.svg';
import './App.css';

// ReactDOM.render((
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// ), document.getElementById('root'));

// app

class App extends Component {
  render() {
    return (
        <div className="App container">
            <div className="row">
                <Wrap type="image" size="col-md-12" color="transparent" title="false"/>
                <Wrap type="headline" text="Jimmy Amash is a developer, product maker, aspiring polymath and mild yogi" size="col-md-12" color="transparent" title="true" />
                <Wrap type="social" size="col-md-12" color="white" title="false" />
                <Wrap type="link" text="Download Resume" icon="true" iconname="download" linkto="https://standardresume.co/api/gpdf?id=-K8C0JpRd8QYZXOxT-01&filename=james-amash-resume.pdf" size="col-md-6" color="transparent" title="false" />
                <Wrap type="headline" text="Built with &hearts; & React" size="col-md-6" color="transparent" title="true" />
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
                        <Image size="medium" source="me.jpg" />
                    }
                    {this.props.type == "link" &&
                        <Link text={this.props.text} linkto={this.props.linkto} icon={this.props.icon} iconname={this.props.iconname} />
                    }
                    {this.props.type == "social" &&
                        <div>
                            <CatchWrapSocial social="envelope" url="mailto:jimmyamash@gmail.com" />
                            <CatchWrapSocial social="twitter" url="https://twitter.com/jimmyamash"/>
                            <CatchWrapSocial social="facebook" url="https://facebook.com/jimmyamash"/>
                            <CatchWrapSocial social="medium" url="https://medium.com/@jimmyamash"/>
                            <CatchWrapSocial social="product-hunt" url="https://producthunt.com/@jimmyamash"/>
                            <CatchWrapSocial social="github" url="https://github.com/jimmyamash"/>
                            <CatchWrapSocial social="dribbble" url="https://dribbble.com/jimmyamash"/>
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
            <a href={this.props.linkto} className={`App-link App-link--block`}>
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
            <a target="_blank" className={`App-wrap__social-link App-wrap__social-link--${ this.props.social } fa fa-${ this.props.social }`} href={`${ this.props.url }`}></a>
        )
    }
}

export default App;

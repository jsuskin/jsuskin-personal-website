import React, { Component } from 'react';
import Header from './components/header/Header';
import About from './components/content/about/About';
import Projects from './components/content/projects/Projects';
import LandingPage from './components/content/landing-page/LandingPage';
import ContactInfo from './components/content/contact-info/ContactInfo';
// import WordsOfWisdom from './components/header/WordsOfWisdom';
import './App.css';

class App extends Component {
  state = {
    content: ''
  }

  componentDidMount() {
    setTimeout(() => this.setState({ content: 'root' }), 7000)
  }

  renderWhich() {
    switch(this.state.content) {
      case 'root':
        return <LandingPage />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <ContactInfo />;
      default:
        return null;
    }
  }

  handleContent = content => {
    this.setState({ content: content })
  }

  render() {
    return (
      <div className="app">
        <Header
          content={this.state.content}
          handleContent={this.handleContent}
        />
        <div className="spacer"></div>
        <div className="content">
          {this.renderWhich()}
        </div>
      </div>
    );
  }
}

export default App;

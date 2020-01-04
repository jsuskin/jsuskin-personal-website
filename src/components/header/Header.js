import React, { Component } from 'react';
import AppTitle from './AppTitle';
import Nav from './Nav';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <Nav
          cl="nav-1"
          links={["About", "Projects"]}
          handleContent={this.props.handleContent}
          selected={this.props.content} />
        <div className="app-title-area">
          <AppTitle handleContent={this.props.handleContent}/>
        </div>
        <Nav
          cl="nav-2"
          links={["GitHub", "Contact"]}
          handleContent={this.props.handleContent}
          selected={this.props.content}/>
      </header>
    );
  }

}

export default Header;

import React from 'react';

function Nav(props) {
  const { cl, links, selected } = props;
  return (
    <nav className={cl}>
      <ul className="links">
        {links.map(link => {
          return (
            <li
              key={link.toLowerCase()}
              className={`nav-item${link.toLowerCase() === selected ? ' selected' : ''}`}
              onClick={link === 'GitHub' ? null : () => props.handleContent(link.toLowerCase())}
            >
              {link === 'GitHub' ? <a href="http://www.github.com/jsuskin" target="_blank" rel="noopener noreferrer" className="github-link">{link}</a> : link}
              {/*link*/}
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Nav;

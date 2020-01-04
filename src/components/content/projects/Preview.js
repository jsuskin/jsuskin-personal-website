import React from 'react';
import ReactPlayer from 'react-player';

class Preview extends React.Component {
  state = { hidden: true }

  handleHidden = () => this.setState({ hidden: !this.state.hidden });

  render() {
    return (
      <div className="preview-container">
        {this.props.project.url ? (
          <div className="preview link">
            <h4>Link:&nbsp;
              <a href={this.props.project.url} target="_blank" rel="noopener noreferrer">
                {this.props.project.url}
              </a>
            </h4>
          </div>
        ) : this.props.project.demo ? (
          <>
            <div
              className={
                `view-demo${this.state.hidden ? ' view-open' : ' view-close'}`
              }
              onClick={this.handleHidden}
              title="View Demo">
                +
            </div>
            <div
              className={
                `preview demo${this.state.hidden ? ' hidden' : ''}`
              }
            >
              <ReactPlayer
                controls
                width="100%"
                height="100%"
                url={this.props.project.demo}
                className="react-player" />
            </div>
          </>
        ) : null}
      </div>
    );
  }

}

export default Preview;

import React, { Component } from 'react';

class GridItem extends Component {
  state = {
    selected: false
  }

  handleClick = (col, row) => {
    const selected = !this.state.selected;
    this.setState({
      selected: selected
    });
    this.props.handleClick(col, row);
  }

  render() {
    const { column, row } = this.props;
    return (
      <div
        className={`grid-item grid-pos-${column} ${Math.floor(( column - 1 ) / 4 + 1) % 2 === 0 ? 'grey-filter' : 'red-filter'}${this.state.selected ? ' darkened' : ''}`}
        onClick={() => this.handleClick(column, row)}
      >
      </div>
    );
  }

}

export default GridItem;

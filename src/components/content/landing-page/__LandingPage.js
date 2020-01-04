import React, { Component } from "react";
import Tone from "tone";
import GridItem from './GridItem';
import Modal from './Modal';
// import snr from "../../data/sounds/snr.wav";
import './LandingPage.css';

const synths = {
  synth1: new Tone.Synth(),
  synth2: new Tone.Synth(),
  synth3: new Tone.Synth(),
  synth4: new Tone.Synth()
}

class LandingPage extends Component {
  state = {
    bars: 4,
    beats: 4,
    playing: false,
    notes: {
      row1: [],
      row2: [],
      row3: [],
      row4: []
    },
    showModal: false,
    selectedPosition: {
      row: null,
      column: null
    }
  }

  componentDidMount() {
    // each synth initially associated with sequence [null, null, ... null]
    this.setState({
      ...this.state,
      notes: {
        row1: Array.from(Array(this.state.bars * this.state.beats), x => null),
        row2: Array.from(Array(this.state.bars * this.state.beats), x => null),
        row3: Array.from(Array(this.state.bars * this.state.beats), x => null),
        row4: Array.from(Array(this.state.bars * this.state.beats), x => null)
      }
    });
  }

  handleClick = (col, row, note) => {
    if(!this.state.notes[`row${row}`][col - 1]) {
      this.setState({
        ...this.state,
        showModal: !this.state.showModal,
        selectedPosition: {
          row: row,
          column: col
        }
      });
    } else {
      const newRow = this.state.notes[`row${row}`];
      newRow.splice(col - 1, 1, null);
      this.setState({
        ...this.state,
        notes: {
          ...this.state.notes,
          [`row${row}`]: newRow
        }
      });
    }
  }

  setGridNote = (note, octave) => {
    const selectedRow = `row${this.state.selectedPosition.row}`;
    const selectedColumn = this.state.selectedPosition.column;
    const newRow = [...this.state.notes[selectedRow]];

    newRow.splice(selectedColumn - 1, 1, `${note}${octave}`)

    this.setState({
      ...this.state,
      notes: {
        ...this.state.notes,
        [selectedRow]: newRow
      },
      showModal: !this.state.showModal
    });
  }

  handlePlay = () => {
    for(const synth in synths) {
      synths[synth].toMaster();
    }
  }

  handleStop = () => {

  }

  render() {
    const { beats, bars } = this.state;
    return (
      <div className="landing-page">
        <Modal
          row={this.state.selectedPosition.row}
          col={this.state.selectedPosition.column}
          showModal={this.state.showModal}
          setGridNote={this.setGridNote}
        />
        <div className="loop-station">
          <div className="grid-area">
            <button onClick={this.handlePlay}>Play</button>
            <button onClick={this.handleStop}>Stop</button>
            {Array.from(Array(4), (x, i) => i + 1).map(row => {
              return (
                <div key={`row-${row}`} className="input-group">
                  {
                    Array.from(Array(bars * beats), (x, i) => i + 1).map(column => {
                      return (
                        <GridItem
                          key={`row-${row}-col-${column}`}
                          row={row}
                          column={column}
                          handleClick={this.handleClick}
                        />
                      )
                    })
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;

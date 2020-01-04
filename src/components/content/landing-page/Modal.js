import React, { Component } from 'react';
import { notes, octaves } from '../../../data/tone-data';

class Modal extends Component {
  state = {
    note: '',
    octave: null
  }

  resetState = () => {
    this.setState({
      note: '',
      octave: null
    });
  }

  setValue = (k, val) => {
    this.setState({
      [k]: val
    });
    if(this.state.note.length && k === 'octave') {
      this.props.setGridNote(this.state.note, val);
      this.resetState();
    }
    if(this.state.octave && k === 'note') {
      this.props.setGridNote(val, this.state.octave);
      this.resetState();
    }
  }

  render() {
    return (
      <div className={`modal${this.props.showModal ? '' : ' hidden'}`}>
        <div className="notes-container">
          <h3>NOTES</h3>
          <div className="notes-list">
            {notes.map(note => {
              return (
                <div
                  key={note}
                  className="note"
                  onClick={() => this.setValue("note", note)}
                >
                  {note}
                </div>
              )
            })}
          </div>
        </div>
        <div className="octaves-container">
          <h3>OCTAVES</h3>
          <div className="octaves-list">
            {octaves.map(octave => {
              return (
                <div
                  key={octave}
                  className="octave"
                  onClick={() => this.setValue("octave", octave)}
                >
                  {{2: 'low', 3: 'mid', 4: 'high'}[octave]}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default Modal;

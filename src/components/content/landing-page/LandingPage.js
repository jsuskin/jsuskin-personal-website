import React, { Component } from "react";
import Tone from "tone";
import GridItem from './GridItem';
import Modal from './Modal';
import snr from "../../../data/sounds/snr.wav";
import bd from "../../../data/sounds/bd.wav";
import './LandingPage.css';

const synths = {
  synth1: new Tone.Synth().toMaster(),
  synth2: new Tone.DuoSynth().toMaster(),
  synth3: new Tone.Sampler({"C3": snr}).toMaster(),
  synth4: new Tone.Sampler({"C3": bd}).toMaster()
}

Object.keys(synths).forEach(synth => {
  const sNum = +synth.split('')[5];

  if(sNum > 2) {
    synths[synth].volume.value = -24;
    // if(sNum === 4) {
    //   synths[synth].attack = 0.1
    // }
  } else {
    // synths[synth].attack = 0.3;
    if(sNum === 1) {
      synths[synth].volume.value = -20;
      // synths[synth].oscillator.type = "sine";
    } else {
      synths[synth].volume.value = -12;
      // synths[synth].oscillator = "sine";
    }
  }
});

const synthPart = (row, synth, tempo) => new Tone.Sequence(
  function(time, note) {
    synth.triggerAttackRelease(note, time);
  },
  row,
  tempo
);

const tempos = { slow: '4n', mid: '8n', fast: '16n' };

let activeSynths = Array.from(Array(4), x => null);

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
    synths: [null, null, null, null],
    showModal: false,
    selectedPosition: {
      row: null,
      column: null
    },
    tempo: tempos.mid
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
    if(row > 2) {
      this.setState({
        ...this.state,
        showModal: false,
        selectedPosition: {
          row: row,
          column: col
        }
      });
      setTimeout(() => this.setGridNote("C", row === 3 ? 2 : 5))
    } else
    // console.log(row, '\n', col);

    // if row is null, grab current row/col & open modal
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
      // copy array
      const newRow = this.state.notes[`row${row}`].slice();
      // remove note from array copy & replace with null
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

    newRow.splice(selectedColumn - 1, 1, `${note}${octave}`);

    this.setState({
      ...this.state,
      notes: {
        ...this.state.notes,
        [selectedRow]: newRow
      },
      showModal: false
    });
  }

  playAudio = (row, synth) => {
    const sp = synthPart(row, synth, this.state.tempo);
    activeSynths.unshift(sp);
    activeSynths.splice(4);
    sp.start();
    // Tone.context.latencyHint = 'balanced';
    // Tone.Transport.start("+0.1");
    Tone.Transport.start();
  }

  handlePlay = () => {
    if(this.state.playing) this.handleStop();
    [...Array(4).keys()].forEach(n => this.playAudio(
      this.state.notes[`row${n + 1}`],
      synths[`synth${n + 1}`]
    ));
    this.setState({ playing: true });
  }

  handleStop = () => {
    Object.keys(synths).forEach(synth => synths[synth].triggerRelease());
    // Tone.Transport.stop();
    Object.keys(synths).forEach((synth, idx) => {
      activeSynths[idx].removeAll();
    })
  }

  handleChangeTempo = e => {
    this.setState({
      tempo: tempos[e.target.value]
    })
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
          <div className="audio-controls">
            <span onClick={this.handlePlay}>Play</span>
            <span className="tempo">Tempo:&nbsp;&nbsp;
              <select defaultValue="mid" onChange={this.handleChangeTempo}>
                <option value="slow">Adagio</option>
                <option value="mid">Moderato</option>
                <option value="fast">Allegro</option>
              </select>
            </span>
            <span onClick={this.handleStop}>Stop</span>
          </div>
          <div className="grid-area">
            {Array.from(Array(4), (x, i) => i + 1).map(row => {
              return (
                <div key={`row-${row}`} className="input-group">
                  <span className="row-label" title={row === 1 ? "synth 1" : row === 2 ? "synth 2" : row === 3 ? "snare" : "kick"}>{["🎹", "🎹", "🥁", "🥁"][row - 1]}</span>
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

import {Component} from 'react'
import './index.css'

class TabletsRemainders extends Component {
  state = {time: ''}

  setTimer = event => {
    this.setState({time: event.target.value})
  }

  getTabletRemainder = () => {
    const {time} = this.state
    if (time === '12:00') {
      alert('in progress')
    }
  }

  render() {
    const {time} = this.state

    return (
      <div className="tablet-remainder-container">
        <input
          type="time"
          className="time-input"
          value={time}
          onChange={this.setTimer}
        />
        <button
          type="button"
          className="get-details"
          onClick={this.getTabletRemainder}
        >
          Enter
        </button>
      </div>
    )
  }
}

export default TabletsRemainders

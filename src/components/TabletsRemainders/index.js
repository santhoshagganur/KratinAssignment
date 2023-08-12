import {Component} from 'react'
import './index.css'

class TabletsRemainders extends Component {
  state = {time: ''}

  setTimer = event => {
    this.setState({time: event.target.value})
  }

  getTabletRemainder = () => {
    const {time} = this.state
    if (time === '12:30') {
      alert(
        'You can take Glimepiride, Gliclazide IR tablets. We wish a speedy recovery.',
      )
    } else if (time === '13:00') {
      alert('Eat a healthy food.')
    } else if (time === '13:10' || time === '13:15') {
      alert(
        'You can take Gliclazide XR, Metformin IR/XR tablets. We wish a speedy recovery.',
      )
    } else if (time === '18:00') {
      alert('You can take LIRAGLUTIDE. We wish a speedy recovery.')
    } else if (time === '11:00' || time === '19:00') {
      alert('You need to take a INSULIN. We wish a speedy recovery.')
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

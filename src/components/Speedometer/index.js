// Write your code here
import {components} from 'react'
import './index.css'

class Speedometer extends components {
  state = {count: 0}
  onIncrease = () => {
    this.setState(priState => {
      return {count: priState.count + 10}
    })
  }



//if state = {counter:200}


  ondecrease = () => {
    this.setState(priState => {
      return {counter: priState.counter - 10}
    })
  }


  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="img"
        />
        <h1 className="paragraph">
          Speed is <span>{count}</span>kmph
        </h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button className="button" type="button" onClick={this.ondecrease}>
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

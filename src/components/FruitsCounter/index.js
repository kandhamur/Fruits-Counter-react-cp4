// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}
  onMangoIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }
  onBananaIncrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }
  render() {
    const {mango, banana} = this.state

    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter">
          <h1 className="counter-text">
            Bob ate <span className="count">{mango}</span>mangoes
            <span className="count">{banana} </span>bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={this.onMangoIncrement}
                  className="counter-button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={this.onBananaIncrement}
                  className="counter-button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

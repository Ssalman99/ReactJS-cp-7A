// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="name-container">
            <p className="icon-letter">{initial}</p>
            <p className="pera"> {name}</p>
          </div>

          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="balance-number">
              <p className="count-money">{balance}</p> <br />
              <br />
              In Rupees
            </p>
          </div>
          <p className="heading">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

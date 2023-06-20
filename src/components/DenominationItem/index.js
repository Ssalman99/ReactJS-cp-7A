// Write your code here
import './index.css'

const denominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button className="button" type="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default denominationItem

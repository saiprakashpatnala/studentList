import './index.css'

const ChildItem = props => {
  const {details} = props
  const {firstName, lastName, phoneNo, emailId, address} = details
  return (
    <li>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{phoneNo}</p>
      <p>{emailId}</p>
      <p>{address}</p>
    </li>
  )
}

export default ChildItem

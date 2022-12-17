import {Component} from 'react'

import {v4 as id} from 'uuid'

import ChildItem from '../ChildItem'

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNo: '',
    emailID: '',
    address: '',
    array: [],
  }

  enterFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  enterLastName = event => {
    this.setState({lastName: event.target.value})
  }

  enterPhoneNo = event => {
    this.setState({phoneNo: event.target.value})
  }

  enterEmailId = event => {
    this.setState({emailID: event.target.value})
  }

  enterAddress = event => {
    this.setState({address: event.target.value})
  }

  registration = event => {
    event.preventDefault()
    const {firstName, lastName, phoneNo, emailID, address} = this.state
    const newStudent = {
      id: id(),
      firstName,
      lastName,
      phoneNo,
      emailID,
      address,
    }
    this.setState(prevState => ({
      array: [...prevState.array, newStudent],
      firstName: '',
      lastName: '',
      phoneNo: '',
      emailID: '',
      address: '',
    }))
  }

  render() {
    const {firstName, lastName, phoneNo, emailID, address, array} = this.state
    return (
      <div>
        <h1>Enter Details</h1>
        <form onSubmit={this.registration}>
          <div className="register-container">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.enterFirstName}
              id="firstName"
              type="text"
              value={firstName}
            />
          </div>
          <div className="register-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.enterLastName}
              id="lastName"
              type="text"
              value={lastName}
            />
          </div>
          <div className="register-container">
            <label htmlFor="phoneNo">Phone No</label>
            <input
              onChange={this.enterPhoneNo}
              id="phoneNo"
              type="text"
              value={phoneNo}
            />
          </div>
          <div className="register-container">
            <label htmlFor="email">email</label>
            <input
              onChange={this.enterEmailId}
              type="text"
              id="email"
              value={emailID}
            />
          </div>
          <div className="register-container">
            <label htmlFor="address">Address</label>
            <textarea
              onChange={this.enterAddress}
              value={address}
              id="address"
            />
          </div>
          <button type="submit">Add Student</button>
        </form>
        <ul>
          {array.map(each => (
            <ChildItem key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Register

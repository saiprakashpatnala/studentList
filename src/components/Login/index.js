import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    email: '',
    password: '',
    showEmailError: false,
    showPasswordError: false,
  }

  enterEmail = event => {
    this.setState({email: event.target.value})
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  submitDetails = event => {
    event.preventDefault()
    const {email, password} = this.state
    const {history} = this.props
    if (email === '' && password === '') {
      this.setState({showEmailError: true, showPasswordError: true})
    } else if (email === '') {
      this.setState({showEmailError: true})
    } else if (password === '') {
      this.setState({showPasswordError: true})
    } else {
      history.push('/register')
    }
  }

  render() {
    const {email, password, showEmailError, showPasswordError} = this.state
    return (
      <div className="form">
        <form onSubmit={this.submitDetails} className="submit-container">
          <h1>Login Form</h1>
          <div className="input-con">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="text"
              onChange={this.enterEmail}
              id="email"
            />
            {showEmailError === true ? <p>*Enter Valid Email</p> : null}
          </div>

          <div className="input-con">
            <label htmlFor="password">Name</label>
            <input
              value={password}
              onChange={this.enterPassword}
              type="password"
              id="password"
            />
            {showPasswordError === true ? <p>*Enter Valid Password</p> : null}
          </div>
          <div className="button-container">
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login

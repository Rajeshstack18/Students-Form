import React from 'react'
import './index.css'

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  handleUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()

    const {username, password} = this.state

    if (username === 'admin' && password === 'password') {
      // eslint-disable-next-line no-alert
      alert('Login successful!')
    } else {
      this.setState({errorMessage: 'Invalid username or password'})
    }
  }

  render() {
    const {username, password, errorMessage} = this.state

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input
              className="input-container"
              type="text"
              id="username"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="input-container"
              type="password"
              id="password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginPage

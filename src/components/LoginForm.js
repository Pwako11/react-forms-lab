import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log("updated Login state# 1", this.state)
  }

  handleLogin = event => {
    event.preventDefault()
    const { username, password } = this.state
    if (username && password){
      this.props.onSubmit(username, password)
    }
    console.log("updated Login state# 2", this.state)
  }

  render() {
    return (
      <form >
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button 
          type="submit"
          onSubmit={event => this.handleLogin(event)}
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

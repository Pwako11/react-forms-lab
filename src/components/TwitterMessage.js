import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {message: ""};
  }

  handleMessage = (event) =>{
    this.setState({
      message: event.target.value
    })
    console.log("Message State", this.state.message.length)
  }

  // handleChange(event){
  //   event.preventDefault();

  // }

  render() {
    console.log("Maxchars", this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value= {this.state.message}
        onChange={this.handleMessage}
        />
        <div>
          {this.props.maxChars - this.state.message.length}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;

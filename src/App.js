import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BotUI from 'botui';

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    var botui = new BotUI('my-botui-app');
    botui.message.add({
      human: true,
      content: 'Whats your name'
    }).then(function () { // wait till previous message has been shown.
      return botui.action.text({
       action: {
         placeholder: 'Your Name'
       }
      });
    }).then(function (result) {
      botui.message.add({
        content: 'nice name: ' + result.value
      });
    });

  }
  render() {
    return (
      <div className="App botcontainer">
        <div className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        <div class="botcontainer" id="my-botui-app">
          <bot-ui></bot-ui>
        </div>
      </div>
    );
  }
}

export default App;

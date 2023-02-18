import React from "react";
import "./App.css";

class App extends React.Component {
  ws: any;

  componentDidMount() {
    this.ws = new WebSocket("ws://127.0.0.1:8080");
    this.ws.onopen = () => {   // 연결!
      console.log("connected!!");
    };
  }
  sendMessage = () => {  // 화살표함수로 만들것!!
    this.ws.send("hello this is client Message");  // 서버로 메세지 보내는건 send
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.sendMessage}>메세지 보내기</button>
          </header>
        </div>
    );
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button } from "antd";

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  onkeydown = e => {
    if (!e.metaKey) {
      e.preventDefault();
    }
    console.log(e.keyCode, "ssssssssssss");
  };
  componentDidMount() {
    // http://keycode.info/
    window.addEventListener("keydown", e => this.onkeydown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", e => this.onkeydown);
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));

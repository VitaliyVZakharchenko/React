import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }
  onLogin = () => {
    this.setState({
      isProcessing: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isProcessing: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isProcessing) {
      return <Spinner size={50} />;
    }
    if (this.state.isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}

export default Auth;

import React from "react"
import PropTypes from "prop-types"
class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ clicks: ++this.state.clicks })}>
          Clicked {this.state.clicks} time{this.state.clicks !== 1 ? 's' : ''}!
        </button>
      </React.Fragment>
    );
  }
}

export default ClickCounter

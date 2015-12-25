import React from "react";
import { connect } from "react-redux";
import { hello } from "../redux/reducer"

class Hello extends React.Component {
  render() {
    const { dispatch, whom } = this.props;

    return (
      <div>
        <span>Hello, {whom}!</span>&nbsp;<input type="text" value={whom} onChange={e => dispatch(hello(e.target.value))}/>
      </div>
    );
  }
}

export default connect(state => state)(Hello);

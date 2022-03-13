import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.counter.value };

  fnIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // console.log(this.props);
    let classes = this.GetBadgeClass();
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.GetBadgeClass()}>{this.formatcount()}</span>
        <button onClick={this.fnIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  GetBadgeClass() {
    let classes = "badge  m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatcount() {
    const { value: count } = this.state;
    return count === 0 ? <h1>zero</h1> : count;
  }
}

export default Counter;

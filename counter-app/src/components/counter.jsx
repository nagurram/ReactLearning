import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.counter.value };

  render() {
    // console.log(this.props);
    console.log("Counter-Render");
    let classes = this.GetBadgeClass();
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.GetBadgeClass()}>{this.formatcount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Decrement
        </button>
      </div>
    );
  }

  GetBadgeClass() {
    let classes = "badge  m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatcount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h4>zero</h4> : count;
  }
}

export default Counter;

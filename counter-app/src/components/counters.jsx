import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <button onClick={this.fnReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.fnDcrement}
            onIncrement={this.fnIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
  fnIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  fnReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  fnDcrement = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
}

export default Counters;

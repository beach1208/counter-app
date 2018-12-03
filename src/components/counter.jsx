import React, { Component } from "react";
class Counter extends Component {
  //state holds any data that this component needs
  state = {
    count: 0
  };

  //   constructor() { // Arrow function でbindできる！！
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  handleIncrement = () => {
    //this.state.count == undefined
    //dont have access to this and we have to use bind method

    this.setState({ count: this.state.count + 1 });
  };

  render() {
    //この変数とデータを右クリック、Refactorで新しいメソッド作れる
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";
    //  let classes = this.getBadgeClass();

    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

import React from "react";

class BenchIndexItem extends React.Component {
  render() {
    return (
      <li key={this.props.key}>{this.props.bench.description}</li>
    );
  }
};

export default BenchIndexItem;
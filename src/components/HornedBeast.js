import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  votingFunc = () => {
    this.setState({
      votes: this.state.votes + 1, // ++ += +1
    });
  };
  render() {
    return (
      <div>
        <title>{this.props.title}</title>
        <h2>{this.props.description}</h2>

        <img
          onClick={this.votingFunc}
          src={this.props.url}
          alt={this.props.title}
        />

        <p>{this.state.votes}</p>
      </div>
    );
  }
}

export default HornedBeast;
/*********************************/

/*













*/

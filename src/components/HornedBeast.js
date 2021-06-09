import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ChooseItem from "./ChooseItem.js";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      showImage: false,
    };
  }

  votingFunc = () => {
    this.setState({ votes: this.state.votes + 1 });
    this.setState({ showImage: true });
  };

  closeImage = () => {
    this.setState({ showImage: false });
  };

  render() {
    return (
      <div>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              onClick={this.votingFunc}
              variant="top"
              src={this.props.image_url}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text> &#10084;&#65039;{this.state.votes}</Card.Text>
            </Card.Body>
          </Card>
          <ChooseItem
            showImage={this.state.showImage}
            closeImage={this.closeImage}
            title={this.props.title}
            image_url={this.props.image_url}
            description={this.props.description}
          />
        </Col>
      </div>
    );
  }
}

export default HornedBeast;

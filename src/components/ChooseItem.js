import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export class ChooseItem extends Component {
  render() {
    return (
      <Modal show={this.props.showImage} onHide={this.props.closeImage}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeImage}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ChooseItem;

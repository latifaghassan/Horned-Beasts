import React from "react"; // import the react class from the react liberary
import Form from "react-bootstrap/Form";
// Define a class component named Footer
// That inherits thr Class
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
import Data from "./Data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      horns: 0,
    };
  }
  // filter1 = (e) => {
  //   Data.map((val) => {
  //     if (val.horns == this.state.horns) this.setState({ show: true });
  //   });
  // };
  filter = (e) => {
    this.setState({ horns: e.target.value });
  };

  render() {
    return (
      <div>
        <Row xs={1} md={4} className="g-4">
          <Form className="form">
            <Form.Group controlId="select">
              <select
                onChange={(e) => this.filter(e)}
                aria-label="Default select example"
              >
                <option value="true" checked>
                  Select Number Of Horns
                </option>
                <option value="1">1 horn </option>
                <option value="2">2 horns </option>
                <option value="3">3 horns </option>
                <option value="100">100 horns</option>
                <option value="0">All </option>
              </select>
            </Form.Group>
          </Form>

          {Data.map((item, keyIndex) => {
            return (
              <>
                {(this.state.horns == item.horns && (
                  <HornedBeast
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                    horns={item.horns}
                    key={keyIndex}
                  />
                )) ||
                  (this.state.horns == 0 && (
                    <HornedBeast
                      title={item.title}
                      description={item.description}
                      image_url={item.image_url}
                      horns={item.horns}
                      key={keyIndex}
                    />
                  ))}
              </>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Main;

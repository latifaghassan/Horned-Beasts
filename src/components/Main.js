import React from "react"; // import the react class from the react liberary

// Define a class component named Footer
// That inherits thr Class
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
import Data from "./Data.json";

class Main extends React.Component {
  render() {
    return (
      <Row xs={1} md={3} className="g-4">
        {Data.map((item) => {
          return (
            <HornedBeast
              title={item.title}
              description={item.description}
              image_url={item.image_url}
            />
          );
        })}
      </Row>
    );
  }
}
export default Main;

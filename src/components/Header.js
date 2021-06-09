import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  filterImage = (e) => {
    this.setState({ showHorns: e.target.value });
  };

  render() {
    return (
      <div>
        <header className="jumbotron text-center">
          <h1> Horn Beast</h1>
        </header>
      </div>
    );
  }
}

export default Header;
/*********************************/

import { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, faCheckSquare, faCoffee);

function App() {
  useEffect(() => {
    fetch("backend/api/v1/health")
      .then(async (r) => {
        const res = await r.json();
        console.log("res", res);
      })
      .catch((e) => console.log("e", e));
  }, []);
  return (
    <div className="container-fluid custom-container">
      <Row>
        <Col md={2} className="hidden-xs h-screen left-panel">
          <div className="d-flex flex-column justify-content-between">
            <div className="avater-panel">
              <img src={require("./assets/images/avatar.png")} alt="avater" />
              <p className="username mt-3">Long user name</p>
            </div>
            <div className="menu-items">
              <p className="mt-2">
                <FontAwesomeIcon icon="image" />{" "}
                <span className="menu-name">Function 1</span>
              </p>
              <p className="mt-2">
                <FontAwesomeIcon icon="image" />{" "}
                <span className="menu-name">Function 2</span>
              </p>
              <p className="mt-2">
                <FontAwesomeIcon icon="image" />{" "}
                <span className="menu-name">Function 3</span>
              </p>
              <p className="mt-2">
                <FontAwesomeIcon icon="image" />{" "}
                <span className="menu-name">Function 4</span>
              </p>
              <p className="mt-2">
                <FontAwesomeIcon icon="image" />{" "}
                <span className="menu-name">Function 5</span>
              </p>
            </div>
          </div>
        </Col>
        <div className="col-md-10 col-sm-12">One of three columns</div>
      </Row>
    </div>
  );
}

export default App;

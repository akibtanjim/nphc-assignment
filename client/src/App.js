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
import Layout from "./components/Layout";
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
      <Layout />
    </div>
  );
}

export default App;

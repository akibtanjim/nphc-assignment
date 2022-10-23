import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
// custom components
import Routes from "./Route";
// css
import "bootstrap/dist/css/bootstrap.min.css";
library.add(fas, faImage);

function App() {
  return (
    <div className="container-fluid custom-container">
      <Routes />
    </div>
  );
}

export default App;

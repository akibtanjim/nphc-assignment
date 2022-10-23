import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
library.add(fas, faImage);

function App() {
  return (
    <div className="container-fluid custom-container">
      <Layout />
    </div>
  );
}

export default App;

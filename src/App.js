import "./App.css";
import Contact from "./container/pages/components/Contact";
import Home from "./container/pages/components/Home";
import FirstContact from "./container/pages/components/FirstContact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

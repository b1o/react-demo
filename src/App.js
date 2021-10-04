import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VideosPage from "./pages/VideosPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/videos">{<VideosPage />}</Route>
          <Route path="/login">{<LoginPage />}</Route>
          <Route path="/home">{<HomePage />}</Route>
          <Route path="/register">{<RegisterPage />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

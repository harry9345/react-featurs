import { BrowserRouter, Route, Switch } from "react-router-dom";

import MyNavbar from "./components/main/containers/MyNavbar";
import Main from "./components/main/Main";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Users from "./components/main/containers/Users";
import NotFound from "./components/main/containers/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={MyNavbar} />
        <Switch>
          <Route path="/Main" component={Main} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

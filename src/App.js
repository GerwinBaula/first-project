import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/registerPage";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/login"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </div>
  );
}

export default App;

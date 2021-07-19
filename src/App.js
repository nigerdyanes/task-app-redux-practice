import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layout/Layout";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/create-task" component={CreateTask} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

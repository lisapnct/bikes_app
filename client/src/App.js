import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import AddBike from "./pages/AddBike";
import OneBike from "./pages/OneBike";
import EditBike from "./pages/EditBike";
import NavMain from "./components/NavMain";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bikes" component={Bikes} />
        <Route exact path="/bikes/create" component={AddBike} />
        <Route exact path="/bikes/:id" component={OneBike} />
        <Route exact path="/bikes/:id/edit" component={EditBike} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Shipments from "./pages/shipments/shipments.component";
import "./app.style.scss";

const App = () => {
    return (
        <>
            <a href="#main" id="mainLocator">
                Skip to main contebnt
            </a>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Shipments} />
                    <Route exact path="/:companyId" component={Shipments} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;

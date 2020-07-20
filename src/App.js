import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./components/Portfolio";
import EnglishPortfolio from "./components/EnglishPortfolio";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route exact path="/en" component={EnglishPortfolio} />
            </Switch>
        </div>
    );
}

export default App;

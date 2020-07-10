import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Experiences from './Experiences';
import Articles from './Articles';

const Pages = ({ user }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <About user={user} />
                </Route>
                <Route path="/exps">
                    <Experiences />
                </Route>
                <Route path="/articles">
                    <Articles />
                </Route>
            </Switch>
        </Router>
    );
};

export default Pages;

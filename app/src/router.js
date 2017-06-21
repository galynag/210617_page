/**
 * Created by Galina on 21.06.2017.
 */
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Home from './components/Home';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Contacts from './components/Contacts';
import MainLayout from './components/MainLayout';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/section1" components={Section1}/>
            <Route path="/section2" components={Section2}/>
            <Route path="/section3" components={Section3}/>
            <Route path="/contacts" component={Contacts} />

        </Route>
    </Router>
);
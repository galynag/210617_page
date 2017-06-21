/**
 * Created by Galina on 21.06.2017.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';
// import Switch from "./Switch";

export default class NavPanel extends Component {
    render() {
        return(
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/section1">Section1</Link></li>
                    <li><Link to="/section2">Section2</Link></li>
                    <li><Link to="/section3">Section3</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>

                </ul>

        )
    }
}
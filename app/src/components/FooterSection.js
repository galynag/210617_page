/**
 * Created by Galina on 21.06.2017.
 */
import React,{Component} from 'react';
import {Link} from 'react-router';

export default class FooterSection extends Component {
    render() {
        return(
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        )
    }
}
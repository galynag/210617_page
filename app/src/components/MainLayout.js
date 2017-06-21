/**
 * Created by Galina on 21.06.2017.
 */
import React, {Component} from 'react';
import NavPanel from "./NavPanel";
import FooterSection from "./FooterSection";
import Switch from './Switch';

export default class MainLayout extends Component {
    render() {
        return (
          <div>
              <Switch onClick={this.handleClick}/>
              <nav className="black">
                    <div className="container">
                        <NavPanel />
                    </div>
                </nav>
                <div className="container">
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <footer className="black">
                    <div className="container">
                        <FooterSection />
                    </div>
                </footer>
          </div>
        )
    };
};
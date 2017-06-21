/**
 * Created by Galina on 21.06.2017.
 */
import React, {Component} from 'react';
import $ from 'jquery'

export default class Switch extends Component{
    //noinspection JSAnnotator
    state = {
            time: 'night'
    };
    handleClick = () => {
        if(this.state.time === 'night') {
            this.setState({time: 'day'});
            $('nav').removeClass('black').addClass('white');
            $('footer').removeClass('black').addClass('white');
        } else {
            this.setState({time: 'night'});
            $('nav').removeClass('white').addClass('black');
            $('footer').removeClass('white').addClass('black');

        }
    };
    render() {
        return (
            <div className="Switch" data-time={this.state.time}>
                <div className="Toggle"
                     data-time={this.state.time}
                     onClick={this.handleClick}>
                    <div className="Button"></div>
                </div>
            </div>
        )
    }
};



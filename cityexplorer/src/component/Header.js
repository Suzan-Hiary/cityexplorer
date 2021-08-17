'use strict';

import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lon: "",
            cityName: "",
            weatherData: [],
            movies: [],
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Header

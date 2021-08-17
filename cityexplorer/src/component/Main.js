import React, { Component } from 'react';


export class Main extends Component {
    render() {
        return (

            <>
                <img alt="map" src={`https://maps.locationiq.com/v3/staticmap?key=pk.11a1580917a0ff1100e019bd6df044f8&&center=${this.props.lat},${this.props.lon}&size='800x800'&zoom=[2,2]`} id="img" />

                <h1>{this.props.cityName}</h1>
                <h2>{this.props.lat}</h2>
                <h2>{this.props.lon}</h2>

            </>


        )
    }
}

export default Main;
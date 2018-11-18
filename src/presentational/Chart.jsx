
import io from "socket.io-client"
import React, { Component } from "react";
import LineChart from './LineChart.jsx';

import { MoonLoader } from 'react-spinners';

let Chart = null;

export default class ChartComponent extends Component {

    constructor(props) {
        super(props);
        this.socket = null;
        this.current = null;
        this.liveData = [];
    }

    componentDidMount() {
        this.socket = io.connect("http://kaboom.rksv.net/watch");
        this.socket.emit('sub', { state: true });
        this.props.loadData(this.socket);
    }

    componentWillUnmount() {
        this.socket.emit('unsub', { state: false });
    }

    render() {

        if (this.props.data !== this.current) {
            this.current = this.props.data;
            let historicalData = this.props.data.split(',');
            const dataObject = {
                date: new Date(parseInt(historicalData[0])),
                high: parseFloat(historicalData[2]),
                low: parseFloat(historicalData[3]),
                open: parseFloat(historicalData[1]),
                close: parseFloat(historicalData[4])
            }
            this.liveData.push(dataObject);

            if (this.liveData.length > 30)
                Chart = <LineChart data={this.liveData} />;
            else {
                Chart = <div className="Loader"> <MoonLoader /> Loading ...
                    </div>
            }
        }

        return (
            <div className="Home">
                {Chart}
            </div>
        );
    }
}



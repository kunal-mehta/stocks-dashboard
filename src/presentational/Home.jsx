import React, { Component } from "react";
import { MoonLoader } from 'react-spinners';
import "./Home.css";
import LineChart from './LineChart.jsx';

export default class Home extends Component {

    componentDidMount() {
        this.props.fetchHistoricalData();
    }

    render() {
        let homeComponent = null;
        let finalData = [];
        if (this.props.isHistoricalDataFetched && this.props.historicalData.length) {
            for (let i = this.props.historicalData.length - 1; i >= 0; i--) {
                let data = this.props.historicalData[i];
                let historicalData = data.split(',');
                const dataObject = {
                    date: new Date(parseInt(historicalData[0])),
                    high: parseFloat(historicalData[2]),
                    low: parseFloat(historicalData[3]),
                    open: parseFloat(historicalData[1]),
                    close: parseFloat(historicalData[4])
                }

                finalData.push(dataObject);
            }
            homeComponent = <LineChart data={finalData} />
        } else {
            homeComponent = <div className="Loader"> <MoonLoader/> Loading Historical Analysis 
            </div>
        }


        return (
            <div className="Home">
                {homeComponent}
            </div>
        );
    }
}
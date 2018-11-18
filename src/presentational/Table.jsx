
import io from "socket.io-client"
import React, { Component } from "react";
import Table from 'react-table';
export default class TableComponent extends Component {

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
        const columns = [{
            Header: 'Date',
            accessor: 'date' // String-based value accessors!
        }, {
            Header: 'Low',
            accessor: 'low',
        }, {
            Header: 'High',
            accessor: 'high'
        }, {
            Header: 'Open',
            accessor: 'open'
        }, {
            Header: 'Close',
            accessor: 'close'
        }]

        if (this.props.data !== this.current) {
            this.current = this.props.data;
            let historicalData = this.props.data.split(',');
            this.liveData.push({
                date: new Date(parseInt(historicalData[0])).toString(),
                high: parseFloat(historicalData[2]),
                low: parseFloat(historicalData[3]),
                open: parseFloat(historicalData[1]),
                close: parseFloat(historicalData[4])
            });
        }

        return (
            <div className="Home">
                <Table columns={columns} data={this.liveData}>
                </Table>
            </div>
        );
    }
}
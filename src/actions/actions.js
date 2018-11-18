import axios from 'axios';

export const fetchHistoricalData = () => {
    return {
        type: 'FETCH_HISTORICAL_DATA',
        payload: axios.get('http://kaboom.rksv.net/api/historical')
    }
}

export const loadData = (data) => {
    return {
        type: 'LOAD_DATA',
        data: data
    }
}
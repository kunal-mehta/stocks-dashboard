import {
    connect
} from 'react-redux';
import Home from '../presentational/Home.jsx';
import {
    fetchHistoricalData
} from '../actions/actions.js';

const mapStateToProps = ({
    Home
}) => ({
    historicalData: Home.historicalData,
    isFetchingHistoricalData: Home.isFetchingHistoricalData,
    isHistoricalDataFetched: Home.isHistoricalDataFetched
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHistoricalData: () => {
            return dispatch(fetchHistoricalData());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
    pure: false
})(Home);
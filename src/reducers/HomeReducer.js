const initialState = {
    historicalData: [],
    isFetchingHistoricalData: false,
    isHistoricalDataFetched: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_HISTORICAL_DATA_PENDING':
            return {
                ...state,
                isFetchingHistoricalData: true
            }
        case 'FETCH_HISTORICAL_DATA_FULFILLED':
            return {
                ...state,
                isHistoricalDataFetched: true,
                isFetchingHistoricalData: false,
                historicalData: action.payload.data
            }

        case 'FETCH_HISTORICAL_DATA_REJECTED':
            {
                return { ...state,
                    isHistoricalDataFetched: true,
                    isFetchingHistoricalData: false
                }

            }
            
        default:
            return state
    }
}
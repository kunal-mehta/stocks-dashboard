import {
    connect
} from 'react-redux';

import TableComponent from '../presentational/Table.jsx';
import {
    loadData
} from '../actions/actions.js';

const mapStateToProps = ({
    Table
}) => ({
    data: Table.liveData
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (socket) => {
            socket.on('data', (res, ackFn) => {
                setTimeout(() => {
                    ackFn(1);
                    dispatch(loadData(res));
                }, 100);

            });

            socket.on('error', (error) => console.log(error));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
    pure: false
})(TableComponent);
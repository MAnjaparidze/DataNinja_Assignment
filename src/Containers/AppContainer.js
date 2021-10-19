import App from '../App';
import { connect } from 'react-redux';

import { getUser } from '../Redux/Actions/userActions';

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => {
            dispatch(getUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

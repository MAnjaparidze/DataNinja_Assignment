import UserTestsPage from '../Pages/UserTestsPage/Index.jsx';
import { connect } from 'react-redux';
import { getUser } from '../Redux/Actions/userActions.js';
import { setTests } from '../Redux/Actions/testsActions.js';

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        tests: state.testsReducer.tests
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => {
            dispatch(getUser());
        },
        setTests: (testsData) => {
            dispatch(setTests(testsData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTestsPage);
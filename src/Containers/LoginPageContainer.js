import LoginPage from '../Pages/LoginPage/Index';
import { connect } from 'react-redux';
import { authUser } from '../Redux/Actions/userActions';

const mapDispatchToProps = (dispatch) => {
    return {
        authUser: (userObj) => {
            dispatch(authUser(userObj))
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);

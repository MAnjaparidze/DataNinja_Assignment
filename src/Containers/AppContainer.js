import App from '../App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}


export default connect(mapStateToProps, null)(App);

import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer, //this key defines the name of the output on states
  form: reduxForm,
  surveys: surveysReducer
});

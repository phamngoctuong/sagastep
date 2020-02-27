import * as taskConstants from './../constants/task';
var initialState = {
	listTask: []
}
var task = (state = initialState, action) => {
  switch(action.type) {
  	case taskConstants.FETCH_TASK : {
			return {
				...state,
				listTask: []
			}
  	}
  	default:
  		return state;
  }
}
export default task;
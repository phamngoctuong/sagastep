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
  	case taskConstants.FETCH_TASK_SUCCESS : {
  		var {data} = action.payload;
			return {
				...state,
				listTask: data
			}
  	}
  	default:
  		return state;
  }
}
export default task;
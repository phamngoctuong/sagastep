import * as taskConstants from './../constants/task';
export const fetchListTask = () => {
	return {
		type: taskConstants.FETCH_TASK
	}
}
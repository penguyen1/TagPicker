// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

// export default combineReducers({
//   todos,
//   visibilityFilter
// })

import data from './data';

const initialState = {
	id: null,
	name: 'React TagPicker',
	items: data,
	parent: null,
	ancestors: []
};

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
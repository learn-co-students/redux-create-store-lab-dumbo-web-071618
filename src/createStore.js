import candyReducer from "./reducers/candyReducer";

export default function createStore(reducer) {
	let state = reducer(undefined, '@@INT')

	function getState() {
		return state
	}

	function dispatch(action) {
		state = reducer(state, action)
		render()
	}

	return {
		getState,
		dispatch
	}
}

function render() {
	const container = document.getElementById('container');
}

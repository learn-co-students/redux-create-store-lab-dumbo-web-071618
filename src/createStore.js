export default function createStore(reducer) {
    let state
    
    const getState = () => {
        // return reducer(state,{})
        return state
    }

    const dispatch = (action)  => {
        state = reducer(state, action)
        render()
    }

    return {getState, dispatch}
}

function render() {
    const container = document.getElementById('container');
}

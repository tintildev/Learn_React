//Initial State
let initialState = 0;


// Counter
function counter(state = initialState, action) {
    if (action.type == "INCREMENT") {
        return state + 1;
    } else {
        return state;
    }
}

export default counter;
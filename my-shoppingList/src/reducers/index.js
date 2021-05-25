
// Store
let initialState = {
    counter: 0,
    //futer States ...
    todos: [
        {id: 5, title: "Hallo Welt"},
        {id: 10, title: "Hallo Welt 2"}
    ]
}

// Counter
function counter(state = initialState, action) {
    if (action.type == "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    } else {
        return state;
    }
}

export default counter;


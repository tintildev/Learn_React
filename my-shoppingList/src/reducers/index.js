
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
            counter: state + 1
        }
    } else {
        return state;
    }
}

// Todo
function todos (state, action) {
    return state;
}

// total state
function reduce (state = intialState, action) {
    return {
        counter: counter(state.counter, action),
        todos: todos(state.todos, action)
    }
}

export default reduce;


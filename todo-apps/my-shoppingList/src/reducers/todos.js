//Initial State
let initialState = [
    {id: 5, title: "Hallo Welt"},
    {id: 10, title: "Hallo Welt 2"}
]

// Todo
function todos (state = initialState, action) {

    // Add Action
    if (action.type == "TODO_ADD") {
        //automatic id
        let maxTodoID = 0;
        for (let todo of state){
            if (todo.id > maxTodoID) {
                maxTodoID = todo.id;
            }
        }
        // add new Todo
        return [].concat(state, [{id: maxTodoID + 1, title: action.title}]);
        //The concat () method merges two or more arrays into one. The method does not change the existing arrays, but instead returns a new array.
    }
    return state;
}

export default todos;
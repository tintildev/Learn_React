//Initial State
let initialState = [
    {id: 5, title: "Hallo Welt"},
    {id: 10, title: "Hallo Welt 2"}
]

// Todo
function todos (state = initialState, action) {

    // Add Action
    if (action.type == "TODO_ADD") {

        //New List
        let newState = []
        for (let todo of state) {
            newState.push(todo);
        }
        //automatic id
        let maxTodoID = 0;
        for (let todo of state){
            if (todo.id > maxTodoID) {
                maxTodoID = todo.id;
            }
        }
        // add new Todo
        newState.push({id: maxTodoID + 1, title: action.title})
        return newState;
    }
    return state;
}

export default todos;
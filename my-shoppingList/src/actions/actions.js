//Actions

//Counter
export function incrementCounter() {
    return {type: "INCREMENT"};
}

//Add
export function addTodo(title) {
    return {type: "TODO_ADD", title: title};
}

//Wikipedia
export function addTodo(title) {
    return {type: "WIKIPEDIA_SEARCH", keyword: keyword};
}
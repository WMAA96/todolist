

export default class TodoList {
    constructor() {
        this.projects = [];
    }
    push(something) {
        this.projects.push(something);
    }
}
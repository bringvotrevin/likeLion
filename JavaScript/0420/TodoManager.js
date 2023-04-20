const { Todo } = require('./Todo.js');

class TodoManager {
	constructor () {
		this.todoList = [];
	}

	addItem(content , finished = false) {
		const todo = new Todo(content, finished);
		this.todoList.push(todo);
	}

	getItems() {
		return this.todoList;
	}

	getLeftTodoCount() {
		return this.todoList.filter((item) => item.finishied === false).length;
	}
}

const todo = new TodoManager();
console.log(todo);
todo.addItem('커밋하기');
console.log(todo);
todo.addItem('밥먹기');
console.log(todo);




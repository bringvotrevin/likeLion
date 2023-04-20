class Todo {
	constructor(content, finished) {
		this.content = content;
		this.finished = finished;
	}

	changeState() {
		this.finished = !this.finished;
	}
}

module.exports = {Todo};
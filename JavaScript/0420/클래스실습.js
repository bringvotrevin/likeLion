class Sausage {
	constructor(taste1, taste2) {
		this.taste1 = taste1;
		this.taste2 = taste2;
	}

	taste() {
		console.log(`${this.taste1}와 ${this.taste2} 맛이 난다!`);
	}
}

class FiresSausage extends Sausage {
	taste() {
		console.log(`${this.taste1}와 ${this.taste2}, 그리고 불맛이 난다!`);
	}
}

const ssg = new Sausage('청양고추', '닭가슴살');
const fireSsg = new FiresSausage('할라피뇨', '이베리코');
ssg.taste();
fireSsg.taste();
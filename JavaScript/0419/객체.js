const me = {
	firstName: '다솜',
	lastName: '임',
	phone: '010-2155-2109',
	eating: function(menu) {
		console.log(`${this.firstName}이 ${menu}를 먹습니다.`);
	}
}


// const dasom = me;
// console.log(dasom);
me.eating('곱창전골');

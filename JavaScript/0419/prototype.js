const generateRandomNum = (max, min) => {
	return Math.floor(Math.random() * (max - min)) + min;
}

// const FoodPicker = function(menuArr) {
// 	this.menuArr = menuArr;
// 	this.sayMenu = function () {
// 		this.menu = this.menuArr[generateRandomNum(0, this.menuArr.length)];
// 		console.log(`오늘의 메뉴는 ${this.menu}입니다!`);
// 	}
// 	// console.log(this.menu);
// }

const pickMenu = () => {
	this.menu = this.menuArr[generateRandomNum(0, this.menuArr.length)];
	console.log(`오늘의 메뉴는 ${this.menu}입니다!`);
}

const ProtoFoodPicker = function(menuArr) {
	this.menuArr = menuArr;
	// console.log(this.menu);
}

const menuArr = ['짜장면', '청국장', '김치찌개'];
const proto = new ProtoFoodPicker(menuArr);
proto.prototype.sayMenu = pickMenu;
console.log('proto : ', proto);


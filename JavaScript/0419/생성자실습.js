const FoodPicker = function(menuArr) {
  let randomNum = Math.floor(Math.random() *menuArr.length);
	this.menu = menuArr[randomNum];
	// console.log(this.menu);
}

function FoodPicker2(menuArr) {
  let randomNum = Math.floor(Math.random() *menuArr.length);
	this.menu = menuArr[randomNum];
	// console.log(this.menu);
}

// 생성자에 화살표 함수는 불가능!
const FoodPicker3 = (menuArr) => {
  let randomNum = Math.floor(Math.random() *menuArr.length);
	this.menu = menuArr[randomNum];
}

const menuArr = ['짜장면', '청국장', '김치찌개'];
const foodPicker = new FoodPicker(menuArr);
const foodPicker2 =  new FoodPicker2(menuArr);
const foodPicker3 =  FoodPicker3(menuArr);
console.log(foodPicker);
console.log(foodPicker2);
console.log(foodPicker3);



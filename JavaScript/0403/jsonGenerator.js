let user = [
  {
    "_id": "642a623bb65fbf85625c1ac4",
    "index": 0,
    "age": 38,
    "eyeColor": "green",
    "name": "Kimberly Mccarty",
    "gender": "female",
    "company": "KYAGORO"
  },
  {
    "_id": "642a623b20160280c91fd7c7",
    "index": 1,
    "age": 37,
    "eyeColor": "brown",
    "name": "Bettye Snow",
    "gender": "female",
    "company": "NIQUENT"
  },
  {
    "_id": "642a623b7f3e4dc399f58a8c",
    "index": 2,
    "age": 39,
    "eyeColor": "green",
    "name": "May Kane",
    "gender": "male",
    "company": "VOIPA"
  },
  {
    "_id": "642a623b90d36c3e4456893a",
    "index": 3,
    "age": 21,
    "eyeColor": "green",
    "name": "Fulton Macias",
    "gender": "male",
    "company": "MUSANPOLY"
  },
  {
    "_id": "642a623b3477e49d7c43fa2c",
    "index": 4,
    "age": 31,
    "eyeColor": "green",
    "name": "Brock Atkins",
    "gender": "male",
    "company": "ZOLARITY"
  },
  {
    "_id": "642a623b9475801f16533cb4",
    "index": 5,
    "age": 31,
    "eyeColor": "blue",
    "name": "Kelly Patton",
    "gender": "male",
    "company": "TETRATREX"
  }
]


console.log(user[0].name);
console.log(user[0].company);

console.log(user.reduce((acc, cur) => {
	return acc += cur.age;
}, 0)/6);
console.log(5 == 5);
console.log(5 == '5');
console.log(5 === '5');

console.log(0 == '');
console.log(true == 1);

// for ~ in vs for ~ of
const gilDong = {
  name : '홍길동',
  year : 2000,
  company : 'KCC'
}

// for ~ in => key
for(let key in gilDong) {
  console.log(key);
  console.log(gilDong[key]);
}

const kccMember = ['노승우', '김상학', '황철원', '송예림'];
console.log("=========================");

for(let key in kccMember) {
  console.log(key);
  console.log(`${key}: ${kccMember[key]}`)
}

console.log("=================");

for(let value of kccMember) {
  console.log(value);
}

// 값이 존재하면 먼저 나옴
console.log('Cat' || 'Dog');

let event = '';

event = event || '영화보기';
console.log(event);

// 위에서 event는 영화보기로 초기화되어 있기 때문에 true
if(event) {
  console.log('놀기');
} else {
  console.log('일하기');
}
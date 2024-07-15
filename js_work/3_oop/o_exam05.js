/**
 * 상속
 */
class IdolModel {
  name;
  year;
  
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요. ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  dance() {
    return '여자 아이돌이 춤을 춥니다.';
  }

  sayHello() {
    return `${super.sayHello()} ${this.part}(을)를 맡고 있습니다.`;
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);
console.log(yuJin.dance());

console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof IdolModel);

console.log(yuJin.sayHello());

// 배열
let iveMembers = ['유진', '가을', '레이', '원영', '리즈', '이서'];

console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
  if(x === '유진') {
    return `아이브: ${x}`;
  } else {
    return x;
  }
}));
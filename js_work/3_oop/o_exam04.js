/**
 * class 기반의 객체지향 프로그래밍
 */
class IdolModel {
  name;
  year;
  
  // 생성자
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// 객체 생성
console.log(new IdolModel('안유진', 2003));

class IdolModel2 {
  // 접근 제어 - #: private와 같음
  #name;
  #year;
  
  // 생성자
  constructor(name, year) {
    this.#name = name;
    this.#year = year;
  }

  // set 메소드
  set name(name) {
    this.#name = name;
  }

  // get 메소드
  get name() {
    return this.#name;
  }

  set year(year) {
    this.#year = year;
  }

  get year() {
    return this.#year;
  }

  // 클래스에 포함 - 클래스 이름으로 호출
  static returnGroupName() {
    return '아이브';
  }
}

// 객체 생성
let yuJin = new IdolModel2('안유진', 2003);
// 외부에서 접근 불가 - undefined
// console.log(yuJin.name);

yuJin.name = '장원영';
console.log(yuJin.name);

yuJin.year = 2005;
console.log(yuJin.year);

console.log(IdolModel2.returnGroupName());

/**
 * factory constructor
 */

class IdolModel3 {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 값만 넣으면 적절한 객체 생성해줌
  static fromObject(object) {
    return new IdolModel3(
      object.name,
      object.year,
    );
  }
  // 리스트 형식으로 값 전달
  static fromList(list) {
    return new IdolModel3(list[0], list[1]);
  }
}

const yuJin2 = IdolModel3.fromObject({
  name: '안유진',
  year: 2003
});

console.log(yuJin2);

// 배열 형태로 넣기
const wonYoung = IdolModel3.fromList(['장원영', 2003]);
console.log(wonYoung);
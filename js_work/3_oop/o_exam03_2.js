/**
 * 인스턴스 __proto__ 변경
 */
function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function() {
  return `${this.name}(이)가 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function() {
    return `${this.name}가 춤을 춥니다.`;
  }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());

// console.log(ray.sayHello()); // error
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);

console.log(gaEul.constructor === IdolModel);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

/**
 * 함수의 prototype 변경
 */
FemaleIdolModel.prototype = IdolModel.prototype;
const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
console.log(eSeo.sayHello());

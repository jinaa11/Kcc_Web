// 함수의 실행 컨텍스트
// Lexical Scope: 선언된 위치가 상위 스코프를 결정한다. => JavaScript
// Dynamic Scope: 실행한 위치(호출 지점)가 상위 스코프를 결정한다.

let var1 = 10;

function func() {
  let var2 = 20;
  console.log(var2);
  console.log(var1);
}

// func();

// let value = "value1";

// function printFunction() {
//   let value = "value2";

//   function printValue() {
//     return value;
//   }
//   // 함수가 선언된 위치가 기준 => 상위에 있는 value2가 출력
//   console.log(printValue());
// }

// printFunction();

let value = "value1";

function printValue() {
  return value;
}

function printFunction(func) {
  let value = "value2";
 
  console.log(func());
}

printFunction(printValue);

console.log("================")

var numberThree = 3;

function functionOne() {
  var numberThree = 100;
  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne();

console.log("================")

//var은 변수를 같이 사용
// var i = 999;

// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// let은 상위 스코프를 구분함
let i = 999;

// 범위 안에서만 변수를 사용
for(let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);

console.log("================")

var var3 = 100;

function func3() {
  var var3 = 200;
  console.log(var3);
}
func3();
console.log(var3);

/**
 * 1. var 키워드는 함수 레벨 스코프만 만든다.
 * 2. let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만든다.
 */


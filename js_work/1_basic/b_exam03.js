/**
 * 타입변환(형변환)
 * 1) 명시적
 * 2) 암묵적
 */

// 명시적
let age = 20;
let stringAge = age.toString();

console.log(typeof stringAge);

// 암묵적
let test = age + '';
console.log(typeof test);

console.log('100' + '2');
console.log('100' * '2');
console.log('100' - '2');

// 문자열 => number: eval(), Number(), 'parseInt()' -> 권장, 'parseFloat()' -> 권장
let num = '안녕';
num = parseInt(num); // parseInt()는 자신이 변환할 수 있는 것까지만 변환
let result = num + 100;
console.log(result);

/**
 * Hoisting(호이스팅)
 * - 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
console.log('==========================')

// var name;
// console.log(name); // undefined
// name = '홍길동';
// console.log(name);

// 변수가 위에 선언된 것처럼 undefined 출력(원래는 not defined 출력되어야 함)
// console.log(kim); 
// var kim = '김씨'; 

// 초기화하기 전에 접근 불가(선언이 된 것처럼 느껴짐)
console.log(kim); 
let kim = '김씨'; 0
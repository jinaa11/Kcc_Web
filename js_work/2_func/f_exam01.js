// 미리 메모리에 올라감
// console.log(add(10, 20));
// 인터프리터에 의해 메모리에 올라가지 않음 - 호이스팅만 됨
// console.log(add2(100, 200));

// 선언적 함수 - 미리 메모리에 올라감
function add(a, b) {
  let sum = a + b;
  return sum;
}

// 익명 함수 - 변수 안에 함수가 들어감 -> 함수처럼 사용
let add2 = function(a, b) {
  let sum = a + b;
  return sum;
}

// add2 vs add2()
let plus = add2; // 함수: 주소 값 할당 => plus도 함수
console.log(plus(50, 100)); // 가능

// 함수를 호출
let plus2 = add2(20, 30); // 150, 함수를 호출 => 리턴 값을 전달
console.log(plus2) // 50

// 함수의 파라미터에 함수를 전달할 수 있다.
let foo = function(func) { // 콜백함수 - 파라미터로 전달
  if(typeof func === 'function') {
    func();
  }
}

// 콜백함수 (func)
foo(function(){
  console.log('파라미터에 함수를 전달하는 예제');
});

// 함수가 함수를 리턴할 수 있다.
// 함수를 리턴하는 예제와 함께 리턴된 함수를 호출해 보자.
let foo2 = function() {
  return function() {
    console.log('함수를 리턴하는 예제');
  }
}

let box = foo2();
box();

// 함수의 파라미터에 (plus or minus) 호출
// plus => plus 기능을 하는 함수를 리턴
// minus => minus 기능을 하는 함수를 리턴
// 리턴받은 해당 함수를 호출해서 사용해보자.
// let plus3 = function(a, b) {
//   return a + b;
// }

// let minus = function(a, b) {
//   return a - b;
// }

// let cal = function(func) {
//   if(func == 'plus3') {
//     plus3(10, 20);
//   } else if(func == 'minus'){
//     minus(30, 10);
//   }
// }

// let a = cal('plus3');
// console.log(a);


function call(mode) {
  // 함수를 담은 객체
  let obj = {
    'plus' : function(left, right) {
      return left + right;
    },
    'minus' : function(left, right) {
      return left - right;
    }
  };

  return obj[mode];
}

let func2 = call('minus');
console.log(func2(50, 30));

// 콜백함수(함수의 파라미터에 전달되는 함수)
function sortDescending(a, b) {
  return b - a;
  // if(a > b) {
  //   return -1;
  // } else if (a < b) {
  //   return 1;
  // } else {
  //   return 0;
  // }
}

let arr = [94, 2, 45, 231, 33];
console.log(arr.sort(sortDescending));

// 즉시 실행 함수: 함수 정의와 동시에 호출
(function(a, b){
  console.log(a + b);
})(10, 5);

function fooo() {
  console.log('foo');
}
fooo();

function bar() {
  console.log('bar');
};
bar();
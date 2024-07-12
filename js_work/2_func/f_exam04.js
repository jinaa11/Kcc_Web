/**
 * 함수 클로저
 * => 함수 호출 이후에도 함수의 실행 컨텍스트 영역을 유지
 */
function outterFunc() {
  let x = 10;
  var innerFunc = function() {
    console.log(x);
  }
  return innerFunc;
}

let inner = outterFunc();
inner();

// 데이터 캐싱
function cashFunction(newNumb) {
  // 아주 오래 소요하는 작업
  var number = 10 * 10;

  return number * newNumb;
}

console.log(cashFunction(10));
console.log(cashFunction(20));

console.log("======================");

function cashFunction2() {
  // 아주 오래 소요하는 작업
  var number = 10 * 10;
  
  function innerCashFunction(newNumb) {
    return number * newNumb;
  }

  return innerCashFunction;
}

const runner = cashFunction2();
console.log(runner(30));
console.log(runner(40));

function outer(arg1, arg2) {
  function inner(innerArg) {
    console.log((arg1 + arg2) / innerArg);
  }
  return inner;
}

// let inner2 = outer(16, 14);
// inner2(10);

// 내부 함수 호출
outer(16, 14)(10);



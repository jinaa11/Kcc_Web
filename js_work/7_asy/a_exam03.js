/**
 * Async 
 */
const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료');
  }, seconds * 1000);
});

// Promise로 만든 함수만 await 선언 가능
// async function runner() {
//   const result = await getPromise(1);
//   console.log(result);
// }

// runner();
// console.log('실행 끝');

// runner에서 await로 순차적 실행
// async function runner() {
//   const result1 = await getPromise(1);
//   console.log(result1);
//   const result2 = await getPromise(2);
//   console.log(result2);
//   const result3 = await getPromise(1);
//   console.log(result3);
// }

// runner();
// console.log('실행 끝');

function moneyLend(borrow) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.1) {
        reject('채무자 파산');
      }
      resolve(borrow * 1.1);
    }, 1000)
  })
}

async function lend() {
  try {
    const lend1 = await moneyLend(10);
    const lend2 = await moneyLend(lend1);
    const lend3 = await moneyLend(lend2);
    const lend4 = await moneyLend(lend3);
    const lend5 = await moneyLend(lend4);
    
    console.log('대출 금액: ' + lend5 + '만원');
  } catch(msg) {
    console.log(msg);
  } finally {
    console.log('대금 종료');
  }
}

lend();
console.log('done');
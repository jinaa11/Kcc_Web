/**
 * Promise
 */
// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('완료');
//   }, 2000);
// });

// timeoutPromise.then((res) => {
//   console.log('--- then ---');
//   console.log(res);
// })

const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료');
  }, seconds * 1000);
});

// 병렬로 한 번에 처리: 동시에 실행시키기
// Promise.all([
//   getPromise(1),
//   getPromise(4),
//   getPromise(1)
// ]).then((res) => {
//   console.log(res);
// });

getPromise(3)
  .then((res) => {
    console.log('----- then -----');
    console.log(res);
    return getPromise(3);
  }).then((res) => {
    console.log('----- then -----');
    console.log(res);
  });

// ----------- reject: 예외 --------------
// Promise = (seconds) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject('에러');
//     resolve('완료');
//   }, seconds * 1000);
// });

// getPromise(3)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log('--- catch ---');
//     console.log(res);
//   })
//   .finally(() => {
//     console.log('--- finally ---')
//   });

// 과제> 빌린 돈에 대한 원금 + 이자(10%)에 대한 상환 금액을 비동기식으로 구현하시오.
const borrow = 20;

const payWith10Perc = new Promise((resolve, reject) => {
    resolve(borrow * 1.1);
});

payWith10Perc
  .then(result => {
    console.log(result + '만원');
  });

console.log('완료');


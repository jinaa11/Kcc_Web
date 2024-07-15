/**
 * Array(배열)
 */
let kccMembers = [
  '진아',
  '수호',
  '한희',
  '채원',
  '주언',
  '연호',
]

console.log(kccMembers);

// push() - 추가된 자릿수가 출력됨(가장 마지막 자리)
console.log(kccMembers.push('승언')); // 7
console.log(kccMembers);

console.log('-----------------------------');
// pop() - 마지막 값만 return
console.log(kccMembers.pop());
console.log(kccMembers);
console.log('-----------------------------');
// shift() - 처음 값을 return
console.log(kccMembers.shift());
console.log(kccMembers);
console.log('-----------------------------');
// unshift() - 맨 처음에 데이터 추가
console.log(kccMembers.unshift('현민'));
console.log(kccMembers);
console.log('-----------------------------');
// splice(시작, 개수)
console.log(kccMembers.splice(0, 3)); // 처음부터 3개까지 return
console.log(kccMembers); // 남은 데이터 출력

// 불변성 함수
kccMembers = [
  '진아',
  '수호',
  '한희',
  '채원',
  '주언',
  '연호',
]
console.log('--------------------------------------');
console.log(kccMembers);
console.log('--------------------------------------');
// concat() - 데이터 추가
console.log(kccMembers.concat('승우')); // 변경된 값을 return
console.log(kccMembers); // 기존 배열 데이터 값은 불변
console.log('--------------------------------------');
// slice(시작, 인덱스)
console.log(kccMembers.slice(0, 4));
console.log(kccMembers); // 불변
console.log('--------------------------------------');
// spread operator - 객체의 프로퍼티를 복사하거나 업데이트 
let kccMembers2 = [...kccMembers];
console.log(kccMembers2);
console.log('--------------------------------------');
let kccMembers3 = kccMembers;
console.log(kccMembers3);
console.log('--------------------------------------');
// kccMembers 메모리 주소를 kccMembers3에 전달 => true 
// => 같은 주소 값을 참조하기 때문에 kccMembers를 변경하면 kccMembers3 값도 같이 변경
console.log(kccMembers === kccMembers3); // true
console.log(kccMembers === kccMembers2); // 메모리 공간이 다르다는 것은 서로에게 영향을 미치지 않는다. => false
console.log('--------------------------------------');
// spread로 중간에 데이터 삽입 가능
let kccMembers4 = ['홍길동', '박길동', ...kccMembers, '조길동', '한길동'];
console.log(kccMembers4);

let arr1 = [100, 200, 300];

function sum(a, b, c) {
  return a + b + c;
}
// spread를 통해 데이터 값 한 번에 넣을 수 있음
console.log(sum(...arr1));
console.log('--------------------------------------');
// join() - 배열을 문자로 표현
console.log(kccMembers.join());
// 구분자 역할
console.log(kccMembers.join('/')); 
console.log(kccMembers.join(', '));
console.log('--------------------------------------');
// sort() - 정렬
console.log(kccMembers.sort()); // 오름차순
console.log(kccMembers.reverse()); // 내림차순

let numbers = [1, 8, 3, 2, 6];
// 오름차순 정렬 알고리즘
let asc = function(a, b) {
  if(a > b) {
    return 1;
  } else if(a < b) {
    return -1;
  }
  return 0;
}
// 내림차순 정렬 알고리즘
let desc = function(a, b) {
  if(a > b) {
    return -1;
  } else if(a < b) {
    return 1;
  }
  return 0;
}

// 오름차순 화살표 함수
numbers.sort((a, b) => a > b ? 1 : -1);
// 내림차순 화살표 함수
numbers.sort((a, b) => a > b ? -1 : 1);

console.log(numbers);
console.log(numbers.sort(asc)); // 오름차순
console.log(numbers.sort(desc)); // 내림차순

// 과제 1> 이름을 기준으로 오름차순하고 전체 출력하세요. (for~in, for~of)
const books = [
  {
    name : '이것이 자바다',
    price : 30000,
    publisher : '한빛미디어'
  },
  {
    name : '스프링 정석',
    price : 35000,
    publisher : '길벗'
  },
  {
    name : '도커의 완성',
    price : 20000,
    publisher : '이지스퍼블릭'
  }
];

// 오름차순
books.sort((a, b) => a.name > b.name ? 1 : -1);
// forEach
books.forEach(book => {
  console.log(`도서명: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`);
});
console.log('--------------------------------------------------------');
for(let i in books) {
  let book = books[i];
  console.log(`도서명: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`);
}
console.log('--------------------------------------------------------');
// for~of
for(let book of books) {
  console.log(`도서명: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`);
}
console.log('--------------------------------------------------------');

// filter - 해당하는 모든 값 반환
numbers = [1, 8, 7, 4, 9];
console.log(numbers.filter((x) => x % 2 === 0)); // 8, 4
// find - 찾고자 하는 첫 번째 값 1개만 반환
console.log(numbers.find((x) => x % 2 === 0)); // 8
// findIndex() - 찾고자 하는 첫 번째 값의 인덱스 반환
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1

// reduce(이전 값, 이후 값(디폴트 값)) - 이전 값과 이후 값을 계속 더해 감
// p: 0, 1 : 0 => p: 1, n: 8 => p: 9, n: 7 => p: 16, n: 4 => p: 20, n: 9 => p: 29
console.log(numbers.reduce((p, n) => p + n, 0)); // 29

// 퀴즈> iveMembers 변수에 있는 모든 스트링 값들을 더해보자.
let iveMembers = ['유진', '가을', '레이', '원영', '리즈', '이서'];
console.log(iveMembers.reduce((p, n) => p + n.length, 0));
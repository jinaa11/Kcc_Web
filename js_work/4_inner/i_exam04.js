/**
 * 정규 표현식(ReqExp)  
 */

// 1. 문자열.match(정규 표현식) => 매칭된 결과(문자열) 리턴
// //: 정규 표현식으로 인식
// const result = 'sports'.match(/sp/);
// console.log(result);

// 2. ReqExp.exec('문자열') => 매칭된 결과(문자열) 리턴
// const str = 'fdsffs ejfldjfldFsdlfjslkdfjsdffs jdklkjlkajreofs';
// const re = /fs/ig; // i: 대소문자 구분 없이, g: 전역 검사
// let result = re.exec(str);

// result 값이 있을 때까지
// while(result) {
//   console.log(result);
//   result = re.exec(str);
// }

// 퀴즈>
// const str = 'This is a data: July 16 2024';
// const req = /\w*\s\d+\s\d+/;
// const result = str.match(req);
// // console.log(result);
// console.log(req.exec(str));

// 퀴즈> 문자열.replace() sw => 소프트웨어 변경
// const str = '오늘 우리는 SW 세상에서 살고 있다. sw가 매우 중요한 시기이다. 그래서 Sw 열심히 공부하자.';
// const re = /sw/ig;
// const result = str.replace(re, '소프트웨어')
// console.log(result);

// group
// const str = 'Java--JavaScript';
// const re = /(\w+)-*(\w+)/; // 2개의 그룹(Java, JavaScript)
// const result = str.replace(re, '$2-$1'); // 그룹의 2번째-1번째 이러한 형식으로 핸들링 가능
// console.log(result);

// 이메일 체크
// 정규 표현식.test(문자열) => 해당 문자열이 정규 표현식에 매칭 유무(true/false) 리턴
// 정상: jan2047@naver.com
// 비정상: 333jan2047@naver.com
// 비정상: jan2047naver.com
// 비정상: jan2047@naver.comdklfjld;
const str = 'jan2047@naver.com';
const re = /^[a-zA-Z]+[\d]*@[a-z]+\.{1}(com|net)$/;
//const re2 = /^[a-zA-Z]+[\d]*@[a-z]+\.[a-z]{3}$/;
//const re3 = /^\D\w+@\w+\.\w{2,3}$/ig;
const result = re.test(str);
console.log(result);
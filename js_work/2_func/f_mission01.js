// 1)
function solution(n) {
  var sum = 0;
  var num = String(n);

  for(let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
    
  }
  return sum;
}
console.log(solution(930211));

// 2)
function solution2(my_string) {
  var arr = [];
  for(let i = 0; i < my_string.length; i++) {
    if(!isNaN(my_string[i])) {
      // console.log(my_string[i]);
       arr.push(my_string[i]);
    }
  }
  arr.sort(sortAsc);
  return arr;
}

let sortAsc = function(a, b) {
  if(a > b) {
    return 1;
  } else if(a < b) {
    return -1;
  } 
  return 0;
}

console.log(solution2("p2o4i8gj2"));

// 3
function meetAt(year, month, day) {
  let result = `${year}년`;

  if(typeof month !== 'undefined') {
    result += `${month}월`;
  }
  if(typeof day !== 'undefined') {
    result = `${year}/${month}/${day}`;
  }
  return result;
}

console.log(meetAt(2024, 7, 11));
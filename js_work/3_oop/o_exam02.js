/**
 * 생성자 함수를 이용한 객체 생성 => 다수의 객체를 생성하기 위해 사용 
 */
function Student(name, kor, eng, mat) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.mat = mat;

  // this.getSum = function() {
  //   return this.kor + this.eng + this.mat;
  // }
  // this.getAverage = function() {
  //   return this.getSum() / 3;
  // }
  // this.toString = function() {
  //   return this.name + "\t" + this.getSum() + "\t" + this.getAverage();
  // }
  Student.prototype = {
    getSum : function() {
      return this.kor + this.eng + this.mat;
    },
    getAverage : function() {
      return this.getSum() / 3;
    },
    toString : function() {
      return this.name + "\t" + this.getSum() + "\t" + this.getAverage();
    }
  }
}

// // 프로토 타입
// Student.prototype.getSum = function() {
//   return this.kor + this.eng + this.mat;
// }

// Student.prototype.getAverage = function() {
//   return this.getSum() / 3;
// }

// Student.prototype.toString = function() {
//   return this.name + "\t" + this.getSum() + "\t" + this.getAverage();
// }

let students = [];

students.push(new Student('홍길동', 80, 70, 90));
students.push(new Student('박길동', 30, 40, 60));

for(let i in students) {
  console.log(students[i].toString());
}

// 퀴즈) Rectangle 생성자 함수를 만들고 사각형 넓이를 구하여보자.
// (width, height, getArea())
function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.getArea = function() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(10, 30);
console.log("넓이: " + rectangle.getArea());
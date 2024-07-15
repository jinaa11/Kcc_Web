/**
 * 과제 1> 1. Rectangle 생성자 함수를 class 기반으로 수정하세요.
 *         2. 상속을 이용해서 Square를 구현해보세요.
 * 
 */
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;

//   this.getArea = function() {
//     return this.width * this.height;
//   }
// }

class Rectangle {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return `넓이는 ${this.width * this.height}입니다.`;
  }
}

// 정사각형
class Square extends Rectangle {
  constructor(width, type) {
    super(width, width);    
  }
}

const rec = new Rectangle(10, 20);
console.log(rec);
console.log(rec.getArea());

const squ = new Square(5);
console.log(squ.getArea());

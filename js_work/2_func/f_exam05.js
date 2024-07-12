let replyService = (function(){
  function create() {
    console.log('create');
  }
  function update() {
    console.log('update');
  }
  function getList(param, callback) {
    let data = '결과 값: ' + param;
    callback(data);
  }

  return {
    create : create,
    update : update,
    getList : getList
  }
})();

function show() {
  // replyService.create();
  replyService.getList('kosa', function(result){
    console.log('내가 원하는 형태의 출력 - ' + result)
  });
}

// show();

function orderService(item, price, quantity, callback) {
  console.log("커피 주문");
  // 주문 관련 서비스 구현
  function orderMenu() {
    let order = `${item} ${quantity}개, 총 ${price * quantity}원 `
    callback(order);
  }
  // return {
  //   orderMenu : orderMenu
  // }
  return orderMenu;
}

function order() {
  // servce 변수로 함수 클로저 가능 - 실행(호출) 상태 유지
  let service = orderService('카푸치노', 4500, 3, function(order) {
    console.log('주문 메뉴: ' + order);
  });
  service();
}

order();

function orderService2(item, price, quantity, callback) {
  console.log("커피 주문");
  // 주문 관련 서비스 구현
  let order = `${item} ${quantity}개, 총 ${price * quantity}원`;
  callback(order);
}

function order() {
  orderService2('바닐라 라떼', 4000, 2, function(result) {
    console.log('주문 메뉴: ' + result);
  });
}

order();
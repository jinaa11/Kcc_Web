$(function() {
	$('.quantity input').change(function() {
		let totalCost = 0;
		let totalQuantity = 0;
		
		// 테이블의 tr에 each를 통해 각각 수량과 가격을 변경
		$('table tbody tr').each(function(index) {
			// 가격
			// find: price 클래스명 찾기 / text: 텍스트 값 추출 / 정규표현식: 숫자나 점이 아닌 것(공백 문자로 만들기)
			let price = parseFloat($(this).find('.price').text()
					.replace(/^[^\d.]/, ''));
			price = isNaN(price) ? 0 : price;
			
			// 수량
			// this: tr / input 값은 val 함수를 통해서 뽑아올 수 있음
			let quantity = parseInt($(this).find('.quantity input').val());
			quantity = isNaN(quantity) ? 0 : quantity;
			
			// 총 비용
			let cost = price * quantity;
			// tr의 cost 클래스명을 찾아감 / cost의 소수점 2자리까지 출력
			$(this).find('.cost').text('$' + cost.toFixed(2));
			
			totalCost += cost;
			totalQuantity += quantity;
		});
		
		$('.subtotal .cost').text('$' + totalCost.toFixed(2));
		$('.shipping .quantity').text(totalQuantity);
		
		// 세금
		let taxRate = parseInt($('.tax .price').text());
		let tax = parseFloat(totalCost * (taxRate / 100));
		$('.tax .cost').text('$' + tax.toFixed(2));
		
		// 배송비
		let shippingRate = parseInt($('$.shipping .price').text()
				.replace(/^[^\d.]/, ''));
		let shipping = parseFloat(totalQuantity * (shippingRate / 100));
		$('.shipping .cost').text('$' + shipping.toFixed(2));
		
		// 최종 금액
		let total = totalCost + tax + shipping;
		$('.total .cost').text('$' + total.toFixed(2));
	});
})
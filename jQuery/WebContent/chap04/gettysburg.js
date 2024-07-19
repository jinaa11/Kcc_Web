$(function() {
	$('div.label').click(function() {
		// p 태그 가로 길이 구하기
		const pWidth = $('div.speech p').outerWidth();
		// div 가로 길이 구하기
		const divWidth = $('#switcher').outerWidth();
		
		//console.log(pWidth + " : " + divWidth);
		const num = parseInt(pWidth) - parseInt(divWidth);
		
		// div 박스 이동
		$('#switcher')
			.fadeTo('fast', 0.5)
			// 첫 번째 인자: 마지막으로 도달해야 하는 값(marginLeft)
			.animate({marginLeft: num}, 'slow')
			.fadeTo('fast', 1.0)
			.slideUp('slow', function() {
				$(this).css('background', 'red')
			})
			.slideDown('slow');
	});
});


// 두 번째 p 태그를 화면에서 숨김: hide()
// read more a 태그 클릭 => 사라진 p 태그를 화면에 보이게 만들기
// slideUp() + slideDown() => slideToggle() - 열렸다 닫혔다
// read more 클릭 => read less
// read less 클릭 => read more
// text(값): text 값 변경, text(): 텍스트 값 추출
$(function() {
	// 두 번째 p 태그를 화면에서 숨기기
	$('div.speech > p').eq(1).hide();
	
	$('a.more').click(function() {
		$('div.speech > p').eq(1).slideToggle('slow');
		
		const $link = $(this);
			if($link.text() === 'read more') {
				$link.text('read less');
			} else {
				$link.text('read more');
			}
	});
});

// large => 기존 폰트크기 1.2배 커지도록
// small => 기존 폰트크기 1.2배 작아지도록
// default => 처음 글자 크기
// css('fontSize'), css('fontSize', 12px)
// css 함수 사용하는 것을 알기!
//$(function() {
//	const $speech = $('div.speech');
//	const defaultSize = parseInt($speech.css('fontSize'));
//	
//	$('#switcher-large').click(function() {
//		console.log($('body').css('fontSize'));
//		$speech
//			.animate({fontSize : defaultSize * 1.2}, 'slow');
//	});
//	
//	$('#switcher-small').click(function() {
//		$speech
//			.animate({fontSize : defaultSize * 0.88}, 'slow');
//	});
//	
//	$('#switcher-default').click(function() {
//		$speech.animate({fontSize : defaultSize}, 'slow');
//	})
//})

// 교수님 풀이
$(function() {
	const $speech = $('div.speech');
	const defaultSize = parseInt($speech.css('fontSize'));
	
	$('#switcher button').click(function() {
		let num = parseInt($speech.css('fontSize'));
		
		switch(this.id) {
			case 'switcher-large':
				num *= 1.2;
				break;
			case 'switcher-small':
				num /= 1.2;
				break;
			default:
				num = defaultSize;
				break;
		}
		
		$speech.animate({fontSize : num + 'px'}, 'slow');
	});
})
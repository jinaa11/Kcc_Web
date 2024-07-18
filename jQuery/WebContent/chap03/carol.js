// step 1
//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').addClass('large');
//	})
//});

// step 2 => large Print => large, Narrow Column => narrow, Default => 처음으로 돌아가기
// addClass('클래스명'), removeClass('클래스명')
//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').removeClass('narrow').addClass('large');
//	})
//	$('#switcher-narrow').on('click', function() {
//		$('body').removeClass('large').addClass('narrow');
//	})
//	$('#switcher-default').on('click', function() {
//		$('body').removeClass('narrow').removeClass('large');
//	});
//});

// step 3: 클릭한 버튼만 selected 스타일 적용
//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').removeClass('narrow').addClass('large');
//		$('.button').removeClass('selected');
//		// 이벤트에서 this는 이벤트 발생한 자기 자신
//		$(this).addClass('selected');
//	})
//	$('#switcher-narrow').on('click', function() {
//		$('body').removeClass('large').addClass('narrow');
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//		
//	})
//	$('#switcher-default').on('click', function() {
//		$('body').removeClass('narrow').removeClass('large');
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//	});
//});

// step 4: selected 관련된 중복 코드 최적화 하자.
//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').removeClass('narrow').addClass('large');
//	})
//	$('#switcher-narrow').on('click', function() {
//		$('body').removeClass('large').addClass('narrow');
//		
//	})
//	$('#switcher-default').on('click', function() {
//		$('body').removeClass('narrow').removeClass('large');
//	});
//	// 클릭한 버튼은 selected 적용, 나머지는 css remove
//	$('#switcher .button').on('click', function() {
//		$('.button').removeClass('selected');
//		// this: 클릭한 버튼
//		$(this).addClass('selected');
//	});
//});

// step 5: 전체적으로 최적화 하자.
//$(function() {
//	// 클릭한 버튼은 selected 적용, 나머지는 css remove
//	$('#switcher .button').on('click', function() {
//		$('.button').removeClass('selected');
//		// this: 클릭한 버튼
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		// id 값을 가져오기 위해서는 DOM 객체여야 함
//		if(this.id === 'switcher-large') {
//			$('body').addClass('large');
//		} else if(this.id === 'switcher-narrow') {
//			$('body').addClass('narrow');
//		}
//	});
//});

// step 6: 이벤트 통합 함수 사용 => 개별 이벤트 함수
//$(function() {
//	// 클릭한 버튼은 selected 적용, 나머지는 css remove
//	$('#switcher .button').click(function() {
//		$('.button').removeClass('selected');
//		// this: 클릭한 버튼
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		// id 값을 가져오기 위해서는 DOM 객체여야 함
//		if(this.id === 'switcher-large') {
//			$('body').addClass('large');
//		} else if(this.id === 'switcher-narrow') {
//			$('body').addClass('narrow');
//		}
//	});
//});

// step 7
$(function() {
	$('#switcher .button').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
});

// step 8: <h3>스타일 변환기</h3> 클릭했을 때 => 버튼 3개를 화면에서 사라지게 하자.
// hidden
//$(function() {
//	$('#switcher h3').click(function() {
////		$('#switcher .button').addClass('hidden');
//		$('#switcher .button').toggleClass('hidden');
//	})
//	
//	// 클릭한 버튼은 selected 적용, 나머지는 css remove
//	$('#switcher .button').click(function() {
//		$('.button').removeClass('selected');
//		// this: 클릭한 버튼
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		// id 값을 가져오기 위해서는 DOM 객체여야 함
//		if(this.id === 'switcher-large') {
//			$('body').addClass('large');
//		} else if(this.id === 'switcher-narrow') {
//			$('body').addClass('narrow');
//		}
//	});
//});

// step 9: 이벤트 버블링을 방지해 보자.: 자식에게 event 걸기
//$(function() {
//	$('#switcher').click(function() {
////		$('#switcher .button').addClass('hidden');
//		$('#switcher .button').toggleClass('hidden');
//	})
//	
//	// 클릭한 버튼은 selected 적용, 나머지는 css remove
//	$('#switcher .button').click(function(e) {
//		$('.button').removeClass('selected');
//		// this: 클릭한 버튼
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		// id 값을 가져오기 위해서는 DOM 객체여야 함
//		if(this.id === 'switcher-large') {
//			$('body').addClass('large');
//		} else if(this.id === 'switcher-narrow') {
//			$('body').addClass('narrow');
//		}
//		e.stopPropagation();
//	});
//});

// step 10: 통합 on 함수 변경 => 이벤트 해제 off('click')
// large, narrow 버튼을 클릭 후 버튼이 사라지게 하는 이벤트 해제
$(function() {
	$('#switcher').on('click.kcc', function() {
//		$('#switcher .button').addClass('hidden');
		$('#switcher .button').toggleClass('hidden');
	})
	
	// 클릭한 버튼은 selected 적용, 나머지는 css remove
	$('#switcher .button').click(function(e) {
		$('.button').removeClass('selected');
		// this: 클릭한 버튼
		$(this).addClass('selected');
		$('body').removeClass();
		
		// id 값을 가져오기 위해서는 DOM 객체여야 함
		if(this.id === 'switcher-large') {
			$('body').addClass('large');
		} else if(this.id === 'switcher-narrow') {
			$('body').addClass('narrow');
		}
		e.stopPropagation();
	});
	
	// namespace - 클릭 이벤트에 각각 이름을 설정할 수 있음
//	$('#switcher').on('click.kosa', function() {
//		alert('다른 이벤트 발생');
//	})
	
	$('#switcher-large, #switcher-narrow').click(function() {
		// namespace가 kcc인 클릭 이벤트만 off
		$('#switcher').off('click.kcc');
	});
	
	// 트리거 - click.kcc 자동 실행
	$('#switcher').trigger('click.kcc');
});
// step 1
$(function() {
	$('#letter-a a').click(function() {
		// HTML 결과 값을 바로 자식 노드로 붙이기 때문에 load 함수 사용(Ajax)
		// a.html을 자식 노드로 옮김
		// 화면에서 hide 했기 때문에 callback 함수로 보여주기
		$('#dictionary').hide().load('a.html', function() {
			// this: dictionary
			$(this).fadeIn();
		});

		// 기본 이벤트 취소 - a 태그 사용시 꼭 해주기!
		return false;
	});
});

// step 2_1
$(function() {
	$('#letter-b a').click(function() {
		// ajax 함수 이용
		$.ajax({
			url : 'b.json',
			type : 'get',
	        dataType : 'json',
	        success : function(data) {
	        	$('#dictionary').empty();
	            
	            // 내림차순 정렬
	            data.sort(function(a, b) {
	            	if(a.term < b.term) {
	            		return 1;
	            	} else if(a.term > b.term) {
	            		return -1;
	            	} else {
	            		return 0;
	            	}
	            });
	            
	            $.each(data, function(index, item) {
	               let html = '<div class="entry">';
	               html += '<h3 class="term">' + item.term + '</h3>';
	               html += '<div class="part">' + item.part + '</div>';
	               html += '<div class="definition">' + item.definition + '</div>';
	               html += '</div>';

	               // dictionary에 html 추가
	               $('#dictionary').append(html);
	            });
	         } 
	      });
	         
	      return false;       
	  });
});
	
// step 2
//$(function() {
//	$('#letter-b a').click(
//			function() {
//				// 파라미터 변수로 json 전체 값이 들어옴
//				$.getJSON('b.json', function(data) {
//					// empty로 기존에 있던 값 비우기
//					// remove를 하면 dictionary 자체가 제거됨
//					$('#dictionary').empty();
//					// 결과값: 배열 => [{},{},{}] => HTML
//					// data: 배열, item: {} 객체
//					$.each(data, function(index, item) {
//						let html = '<div class="entry">';
//						html += '<h3 class="term">' + item.term + '</h3>';
//						html += '<div class="part">' + item.part + '</div>';
//						html += '<div class="definition">' + item.definition
//								+ '</div>';
//						html += '</div>';
//
//						// dictionary에 html 추가
//						$('#dictionary').append(html);
//					});
//				});
//
//				return false;
//			});
//});

// step 3
$(function() {
	$('#letter-c a').click(function() {
		// script 소스를 로드해서 script 실행
		$.getScript('c.js')

		return false;
	});
});

// step 4
$(function() {
	$('#letter-d a').click(
			function() {
				// xml => HTML 변환
				// data: root element => entries가 들어가 있음
				$.get('d.xml', function(data) {
					// data는 dom 객체이기 때문에 제이쿼리 객체로 변환해야 함
					$(data).find('entry').each(
							function(index) {
								// this: entry
								$entry = $(this);
								let html = '<div class="entry">';
								html += '<h3 class="term">'
										+ $entry.attr('term') + '</h3>';
								html += '<div class="part">'
										+ $entry.attr('part') + '</div>';
								html += '<div class="definition">'
										+ $entry.find('definition').text()
										+ '</div>';

								$('#dictionary').append(html);
							});
				});

				return false;
			});
});

// step 5
$(function() {
	$('#letter-e a').click(function() {
		// this: html에서 클릭한 값
		$.get('server3.jsp', {
			'term' : $(this).text()
		}, function(data) {
			$('#dictionary').text(data);
		})

		return false;
	});
});

// step 6
$(function() {
	$('#letter-f form').submit(function() {
		$.ajax({
			url : 'server3.jsp',
			type : 'post',
			// this: form
			// serialize: key-value 형태로 만들어줌
			data : $(this).serialize(),
			dataType : 'text',
			// 서버에 데이터가 잘 도착하면 success 호출
			success : function(data) {
				$('#dictionary').text(data);
			}
		})

		return false;
	});
});
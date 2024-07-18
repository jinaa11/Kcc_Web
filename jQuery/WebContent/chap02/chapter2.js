$(function() {
	$('#selected-plays > li').addClass('horizontal');
	// horizontal이 적용된 li만 제외
	$('li:not(.horizontal)').addClass('sub-level');
	
	// pdf 있는 href => pdf css 적용
	$('a[href $= pdf]').addClass('pdflink');
	// mailto 있는 href => mailto css 적용
	$('a[href ^= mailto]').addClass('mailto');
	// a 태그 중 henry 포함 => henrylink css 적용
	// henryiv 제외 (mailto로 시작)
	// not selector
	$('a[href *= henry]:not(.mailto)').addClass('henrylink');
	// not 함수 => 팩토리 함수 밖에서 사용
	$('a[href *= henry]').not('.mailto').addClass('henrylink');
	// 짝수번째 tr에 css 적용
	$('tr').filter(':odd').addClass('alt'); // 짝수번째
	// selector 사용
//	$('tr:odd').addClass('alt'); // 짝수번째
//	$('tr:nth-child(odd').addClass('alt'); // 홀수번째
	// Henry가 포함된 td에 css highlight 적용
//	$('td:contains(Henry)').addClass('highlight');
	// Henry가 있는 td의 사극, 1596을 찾아서 css highlight 적용(Henry 형제들)
	// 집합에서 이전 값도 포함하고 싶을 때 => andSelf()
//	$('td:contains(Henry)').nextAll().andSelf().addClass('highlight');
	// Henry를 찾아서 부모로 가서 부모의 첫 번째, 두 번째, 세 번째 찾기
	$('td:contains(Henry)').parent().find('td:first').addClass('highlight')
		.end().find('td:eq(1)').addClass('highlight');
	
	// each() => 배열을 받아서 각각의 작업을 수행
	// $.each(배열, function(index, item) {배열의 각 요소의 작업 수행})
	// $('선택자').each(function(index, item) {각 요소들의 작업 수행})
	
	
});
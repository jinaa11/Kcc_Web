$(function() {
	// 1. <ol id="note"></o1> => 생성해서 => <div id="footer"> 앞에 위치하도록 하자.
	$('<ol id="note"></o1>').insertBefore('#footer');
	
	// 2. <span class="footnote"> 앞에 <a id="">[1]</a>
	// 3. <ol> 태그 자식으로 <span> 이동
	$('span.footnote').each(function(index) {
		// this: 각 각의 span 태그
		$(this).before('<a id="context-' + (index + 1) + '">[' + (index + 1) + ']</a>')
			// 부모 - 자식 => 자식이 앞에 와 있어서 appendTo 사용	
			.appendTo('#note')
			// 부모가 앞에 있으면 append
			.append('&nbsp; <a href="#context-' + (index + 1) + '">Context-' + (index + 1) + '</a>')
			.wrap('<li></li>')
	})
});
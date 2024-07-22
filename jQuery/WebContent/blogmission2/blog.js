$(function() {
	$(window).on('load', function() {
		$.ajax({
			url: 'server.jsp',
			type: 'get',
			data: $(this).serialize(),
			dataType: 'json',
			success: function(data) {
				$('#list').empty();
				$.each(data, function(index, item) {
					let html  = '<div class="blog">';
					html += '<h3 class="title">' + item.title + '</h3>';
					html += '<div class="contents">' + item.contents + '</div>';
					html += '<div class="writer">' + item.writer + '</div>';
					html += '<button class="del-btn">Delete</button>';
					html += '</div>';
					
					$('#list').append(html);
				})
			}
		});
		return false;
	});

});

//삭제 - remove, 댓글목록에는 그대로 있음

$(function() {
	$('form').submit(function() {
		
		$.ajax({
			url: 'server.jsp',
			type: 'post',
			data: $(this).serialize(),
			dataType: 'json',
			success: function(data) {
				$('#list').empty();
				$.each(data, function(index, item) {
					let html  = '<div class="blog">';
					html += '<h3 class="title">' + item.title + '</h3>';
					html += '<div class="contents">' + item.contents + '</div>';
					html += '<div class="writer">' + item.writer + '</div>';
					html += '<button class="del-btn">Delete</button>';
					html += '</div>';
					
					$('#list').append(html);
				})
			}
		});
		return false;
	});
	
	$('body').on('click', '.del-btn', function() {
		$(this).parent().remove();
	})
	
	
});
function collapse_dd(){
	if ($(this).parent().hasClass('collapsed')) {
		$(this).parent().removeClass('collapsed')
		$(this).parent().children('dd').slideDown('fast')
	} else {
		$(this).parent().addClass('collapsed')
		$(this).parent().children('dd').slideUp('fast')
	}
	return false;
}
$(document).ready(function() {
	ops = ['post', 'get', 'put', 'patch', 'delete']
	ops.forEach(function(op) {
		$('dl.' + op + ' > dd').hide()
		$('dl.' + op).addClass('collapsed')
		$('dl.' + op + ' > dt').click(collapse_dd)
		$('dl.' + op + ' > dd > p:first-child').each(function() {
			$(this).parent().parent().children('dt').first().append($(this))
		})
	})

	$('a').click(function(e) {
		e.stopPropagation();
	})

	$(window).on('hashchange', function() {
		if (window.location.hash.length != 0) {
			base = $(window.location.hash.replace(/[\(\)]/g, '\\$&'))
			section = base.closest('.collapsed')
			section.removeClass('collapsed')
			section.children('dd').show()
			$(document).scrollTop(base.offset().top)
		}
	})
});

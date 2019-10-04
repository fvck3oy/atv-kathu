$(document).ready(function() {
	resizer()

	$(window).resize(function() {
		resizer()
	})

	if (localStorage.getItem('visited') !== 'true') {
		var userLang = navigator.language || navigator.userLanguage
		if (userLang.indexOf('th') !== -1) {
			setLang('th')
		} else if (userLang.indexOf('cn') !== -1) {
			setLang('cn')
		} else {
			setLang('en')
		}
		localStorage.setItem('visited', 'true')
	} else {
		switch (localStorage.getItem('lang')) {
			case 'th':
				setLang('th')
				break
			case 'cn':
				setLang('cn')
				break
			default:
				setLang('en')
				break
		}
	}

	$('.flag-en').click(function() {
		setLang('en')
	})

	$('.flag-th').click(function() {
		setLang('th')
	})

	$('.flag-cn').click(function() {
		setLang('cn')
	})

	function setLang(lang) {
		$('.lang-en').hide()
		$('.lang-th').hide()
		$('.lang-cn').hide()
		$('.lang-' + lang).show()
		localStorage.setItem('lang', lang)
	}

	function resizer() {
		var h = $('#contact').height(),
			w = $('#fanpage').width()
		$('#fanpage iframe').height(h)
		$('#fanpage iframe').attr(
			'src',
			'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F498503803640421%2F&tabs=timeline&width=' +
				w +
				'&height=' +
				h +
				'&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=176099606499663'
		)
	}
})

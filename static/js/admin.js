$(function () {
	$('#tabs').addtabs();
	$(".list-group-item-info").click(function (e) {
		/*切换折叠指示图标*/
		$(this).find("span").toggleClass("glyphicon-chevron-down");
		$(this).find("span").toggleClass("glyphicon-chevron-up");
	});

	/**
	 * 全屏
	 */
	$('#sideToggle').on('click', showAndHideSide);
	$('.admin-side-toggle').on('click', showAndHideSide)	
});

function showAndHideSide() {
	var sideWidth = $('.admin-side').width();
	if (sideWidth === 200) {
		$('.admin-side').animate({
			width: '0'
		});
		$('.admin-body').animate({
			left: '0'
		});
		$('.admin-side-toggle').show(500);
	} else {
		$('.admin-side').animate({
			width: '200px'
		});
		$('.admin-body').animate({
			left: '200'
		});
		$('.admin-side-toggle').hide(500);
	}
}

/**
 * 收藏本站
 * @param {any} url
 * @param {any} title
 */
function addFavorite(url, title) {
	var _t, _u;
	if (typeof opts != 'object') {
		_t = document.title;
		_u = location.href;
	} else {
		_t = opts.title || document.title;
		_u = opts.url || location.href;
	}
	console.log(_u);
	console.log(_t);
	try {
		window.external.addFavorite(_u, _t);
	} catch (e) {
		try {
			window.sidebar.addPanel(_t, _u, "");
		} catch (e) {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n请按 Ctrl+D 键添加到收藏夹");
		}
	}
}
/**
 * 设为首页
 */
function setHomepage(u) {
	var _u;
	if (typeof u == 'undefined') {
		_u = location.href;
	} else {
		_u = u
	}
	console.log(_u);
	if (navigator.userAgent.indexOf('MSIE ') != -1) {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(_u);
	} else {
		alert("非 IE 浏览器请手动将本站设为首页");
	}
}
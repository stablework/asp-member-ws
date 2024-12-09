var cviResults = {};
cviResults.resultHeight = 420;

$(document).ready(function () {
	
	$("#navb li.navButton img").hover(function () {
		$(this).attr("src", $(this).attr("src").replace("b.png", "c.png"));
	}, function () {
		$(this).attr("src", $(this).attr("src").replace("c.png", "b.png"));
	});
	
	$('ul#navb').roundabout({
		
		btnNext : '#btnNext',
		btnPrev : '#btnPrev',
		tilt : -3,
		clickToFocus : false
		
	}).on('mousewheel', function (e, delta) {
		e.preventDefault();
		$(this).roundabout_adjustBearing(delta * 3);
		return false;
	});
	
		/*
	//direct link to store vs div popup selection
	$('div.results div.locked').on('click', function (e) {
		// console.log("div.results div.locked -> click");
		e.preventDefault();
		$( "#dProducts" ).dialog({
			width: 700,
			height: 600,
			modal: true
		});
	});
	*/
	
	$('div.results').each(function (i) {
		// console.log("div.results div.locked -> click");
		// var myHeight = 330;
		var myItem = $(this);
		myItem.data("oHeight",myItem.height());
		console.log(this,myItem.height())
		if (myItem.height() > cviResults.resultHeight) {
			myItem.append('<div class="exRes"><a href="#" class="showMore">Mostrar más...</a></div>');
			myItem.css({
				"height": cviResults.resultHeight + "px",
				"overflow": "hidden"
			});
		}
	});
	
	$('div.results a.showMore').on('click', function (e) {
		e.preventDefault();
		// $(this).parent().hide().parent().animate({
		if ($(this).parents("div.results").height() == $(this).parents("div.results").data("oHeight")) {
			$(this).text("Mostrar más...").parent().parent().animate({
				"height": cviResults.resultHeight
			},function(){
				$(this).css({
					"overflow": "hidden"
				});
			});
		}else{
			$(this).text("Mostrar menos...").parent().parent().animate({
				"height": $(this).parent().parent().data("oHeight")
			},function(){
				$(this).css({
					"height": "auto",
					"overflow": "visible"
				});
			});
			
		}
	});
	
	$('#dProducts button').on('click', function (e) {
		e.preventDefault();
		$('#dProducts').dialog("close");
		// $("#dUpgrade").html('<iframe src="purchaseItem.php?item=' + $(this).attr("class") + '" width=100% height=100%></iframe>');
		$( "#upgradeFrame" ).dialog({
			width: 700,
			height: 600,
			modal: true
		});
		$("#upgradeFrame").attr('src','purchaseItem.php?item=' + $(this).attr("class"));

	});
	
	
	
});

/*
jwplayer('videoPlayer').setup({
	'flashplayer' : 'js/player/player.swf',
	'width' : '591',
	'height' : '336',
	'controlbar.position' : 'bottom',
	'file' : 'images/starwarsdads_psa.mp4'
});

*/

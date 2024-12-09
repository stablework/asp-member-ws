$(document).ready(function () {
	
	var myRound = {
		"#aWhoIAm": {image:"images/thinkb.png",caption:"Who I Am"},
		"#aThink": {image:"images/thinkb.png",caption: "How you think"},
		"#aWorld": {image:"images/worldb.png",caption: "You vs the World"},
		"#aGraph": {image:"images/graphb.png",caption: "Proportion View"},
		"#aSolar": {image:"images/solarb.png",caption: "Your Solar System"},
		"#aPassion": {image:"images/passionb.png",caption: "Your Great Passion"},
		"#aFear": {image:"images/fearb.png",caption: "Your Great Fear"},
		"#aScore": {image:"images/scoreb.png",caption: "Weighted Scores"},
		"#aBook": {image:"images/handbookb.png",caption: "Read Handbook"},
		"#aChoices": {image:"images/choicesb.png",caption: "Book: Choices"}
	}
	
	$.each(myRound, function(myEl, attrs) { 
		// alert(key + ': ' + value); 
		window.console && console.log(myEl,attrs);
		if ($(myEl).length > 0){
			$('ul#navb').append('<li class="navButton"><a href="' + myEl + '"><img src="' + attrs.image + '"></a>' + attrs.caption + '</li>');
		}
	});
	
	
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
	
	$('div.results div.locked').on('click', function (e) {
		// console.log("div.results div.locked -> click");
		e.preventDefault();
		$( "#dProducts" ).dialog({
			width: 700,
			height: 600,
			modal: true
		});
	});
	
	$('div.callout div.calloutlocked').on('click', function (e) {
		// console.log("div.results div.locked -> click");
		e.preventDefault();
		$( "#dProducts" ).dialog({
			width: 700,
			height: 600,
			modal: true
		});
	});

	$('div.results').not('.showall').each(function (i) {
		// console.log("div.results div.locked -> click");
		var myHeight = 330;
		var myItem = $(this);
		myItem.data("oHeight",myItem.height());
		if (myItem.height() > myHeight) {
			myItem.append('<div class="exRes"><a href="#" class="showMore">Show more...</a></div>');
			myItem.css({
				"height": myHeight + "px",
				"overflow": "hidden"
			});
		}
	});
	
	$('div.results a.showMore').on('click', function (e) {
		e.preventDefault();
		$(this).parent().hide().parent().animate({
			"height": $(this).parent().parent().data("oHeight")
		},function(){
			$(this).css({
				"height": "auto",
				"overflow": "visible"
			});
		});
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
	$('#giveCVI a span.stButton').css({"display":"none"});
	
});


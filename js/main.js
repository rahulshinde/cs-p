$( document ).ready(function() {
	$('.draggable').each(function() {
		for (i = 0; i <= 2; i++) { 
    		RandomPlace(i);
		}
	});

	$(".draggable").fadeToggle();

    Draggable();
});

var docHeight = $(document).height() - 100,
    docWidth = $(document).width(),
    $div = $('.draggable'),
    divWidth = $div.width(),
    divHeight = $div.height(),
    heightMax = docHeight - divHeight,
    widthMax = docWidth - divWidth;


function RandomPlace(i) {
	var top = Math.floor( Math.random() * heightMax ),
		left = Math.floor( Math.random() * widthMax );

    $('#' + i).css({"position":"absolute","top": top + "px", "left": left + "px"});
}

function Draggable() {
    $('.draggable').draggable();
}
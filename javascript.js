$(document).ready(function() {
	
	//allows for different colors
	var $color = "#00F";
	$("#color_select").spectrum({
		color: "#00F",
		showAlpha: true, //can change opacity
		clickoutFiresChange: true, //will change even if "submit" not hhit
		change: function(color) {   //return hex of color value
			$color = color.toHexString();
			}
			
	});
	
	
	
	function createGrid(numHorizontal, numVertical) {
		if(Number.isInteger(numHorizontal) && Number.isInteger(numVertical) && //check for int x | 0<x<100
			numHorizontal>0 && numVertical<=100 &&numVertical>0 && numVertical<=100){
	
		//give height and width from CSS without "px"
		var lightboxWidth = parseInt(  ($("#light_box_container").css("width")  ),10); 
		var lightboxHeight = parseInt( ($("#light_box_container").css("height") ),10); 
	
		//size of each div .. subtraction for 1px border
		var eachWidth =  (lightboxWidth - numHorizontal)/numHorizontal + "px"; 
		var eachHeight = (lightboxHeight - numVertical) /numVertical   + "px";
		var styleAttribute = " 'width: " + eachWidth + "; height: " + eachHeight + " ' ";
	

		//adds total number of divs
		for(i = 1; i<=numHorizontal*numVertical; i++) { 
			$("#light_box_container").append("<div class = 'unit' style = " + styleAttribute + "></div>");
		}
		} else {
			alert("Please pick integers between 1 and 99");
		}
	
	}
	$("#grid_create").click(function() {
		$("#light_box_container").empty();
		var row = parseInt($("#rows").val(),10);
		var column = parseInt($("#columns").val(),10);
		createGrid(row, column);
		});
	createGrid(45,45);	
	
	$("#fill_all").click(function() {
		$(".unit").css("background-color", $color);
		});
		
	//function setColor() 
	$("#reset").click(function() {
		$(".unit").css("background-color", "white");
		});
	
	$(".unit").mousedown(function() { 
		$(".unit").hover(function() {
			$(this).css("background-color", $color);
			})
			}).mouseup(function() {
			$(".unit").unbind("mouseenter mouseleave");
			});
				
	
	
/*	$(".unit").hover(function() {
		$(this).css("background-color", $color);	},
		function() {
		$(this).css("background-color", "white");
		});
		
	*/
		
});
	
	
	
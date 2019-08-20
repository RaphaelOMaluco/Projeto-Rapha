
$(document).ready(function(){
	 $("#flip").click(function(){
	// $("#panel").slideDown("slow");
	//$("#panel").slideDown();
	//$("#panel").slideDown("fast");
	$("#panel").slideDown(1000);
 });
	$("#flip2").click(function(){
	// $("#panel").slideUp("slow");
	//$("#panel").slideUp();
	//$("#panel").slideup("fast");
	$("#panel").slideUp(1000);
 });
	$("#flip3").click(function(){
	// $("#panel").slideToggle("slow");
	//$("#panel").slideToggle();
	//$("#panel").slideToggle("fast");
	$("#panel").slideToggle(1000);
 });
});



//fade out

	$(document).ready(function(){
	  $("#b1").click(function(){
	    $("#div1").fadeOut();
	    $("#div2").fadeOut("slow");
	    $("#div3").fadeOut(3000);
	  });

	   $("#b2").click(function(){
	    $("#div1").fadeIn();
	    $("#div2").fadeIn("slow");
	    $("#div3").fadeIn(3000);
	  });

	});


//Append


$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
   $("#btn3").click(function(){
    $("b").remove();
  });

  $("#btn4").click(function(){
    $("li").remove();
  });

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    /* Toggle between adding and removing the "active" class,
	    to highlight the button that controls the panel */
	    this.classList.toggle("active");

	    /* Toggle between hiding and showing the active panel */
	    var panel = this.nextElementSibling;
	    if (panel.style.display === "block") {
	      panel.style.display = "none";
	    } else {
	      panel.style.display = "block";
	    }
	  });
}
});


//acordion

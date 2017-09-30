$(document).ready(function(){
    
    function addHoverable(remove){
	console.log("shit");
	$("#bio").addClass("hoverable");
	$("#resume").addClass("hoverable");
	$("#coding").addClass("hoverable");
	$("#writing").addClass("hoverable");
	setTimeout(remove, 100);
    };
    
    $(".hoverable").hover(
	function(){
	    var id = this.id;
	    if (id == "bio"){
		$("#bio").removeClass("faded-1 faded-2 faded-3").children().text("Justin Pacquing");
		$("#resume").removeClass("hoverable").addClass("faded-1").children().text("ABOUT JUSTIN");
		$("#coding").removeClass("hoverable").addClass("faded-2").children().text("about_justin");
		$("#writing").removeClass("hoverable").addClass("faded-3").children().text("About justin");
	    }
	    if (id == "resume"){
		$("#bio").removeClass("hoverable").addClass("faded-1").children().text("Justin's Resume");
		$("#resume").removeClass("faded-1 faded-2 faded-3").children().text("JUSTIN PACQUING");
		$("#coding").removeClass("hoverable").addClass("faded-1").children().text("justins_resume");
		$("#writing").removeClass("hoverable").addClass("faded-2").children().text("Justin's resume");
	     }
	    if (id == "coding"){
		$("#bio").removeClass("hoverable").addClass("faded-2").children().text("Coding Samples");
		$("#resume").removeClass("hoverable").addClass("faded-1").children().text("CODING SAMPLES");
		$("#coding").removeClass("faded-1 faded-2 faded-3").children().text("justin_pacquing");
		$("#writing").removeClass("hoverable").addClass("faded-1").children().text("Coding samples");
	     }
	    if (id == "writing"){
		$("#bio").removeClass("hoverable").addClass("faded-3").children().text("Writing Samples");
		$("#resume").removeClass("hoverable").addClass("faded-2").children().text("WRITING SAMPLES");
		$("#coding").removeClass("hoverable").addClass("faded-1").children().text("writing_samples");
		$("#writing").removeClass("faded-1 faded-2 faded-3").children().text("Justin pacquing");
	    }
	},function(){
	    addHoverable(
		function(){
		    console.log("this works");
		    if ($("#bio").hasClass("hoverable"))
			$("#bio").removeClass("faded-1 faded-2 faded-3").children().text("Justin Pacquing");
		    if ($("#resume").hasClass("hoverable"))
			$("#resume").removeClass("faded-1 faded-2 faded-3").children().text("JUSTIN PACQUING");
		    if ($("#coding").hasClass("hoverable"))
			$("#coding").removeClass("faded-1 faded-2 faded-3").children().text("justin_pacquing");
		    if ($("#writing").hasClass("hoverable"))
			$("#writing").removeClass("faded-1 faded-2 faded-3").children().text("Justin pacquing");
		});
	});
    
});


    
    
    

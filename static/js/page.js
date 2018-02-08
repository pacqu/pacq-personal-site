$(document).ready(function(){
    
    function addHoverable(remove){
	console.log("shit");
	$("#bio").addClass("hoverable");
	$("#resume").addClass("hoverable");
	$("#coding").addClass("hoverable");
	$("#writing").addClass("hoverable");
	$("#bio-alt").addClass("hoverable");
	$("#resume-alt").addClass("hoverable");
	$("#coding-alt").addClass("hoverable");
	$("#writing-alt").addClass("hoverable");
	setTimeout(remove, 50);
    };

    $(".hoverable").hover(
	function(){
	    var id = this.id;
	    if (id == "bio"){
		$("#bio").removeClass("faded-1 faded-2 faded-3");
		$("#resume").removeClass("hoverable").addClass("faded-1");
		$("#coding").removeClass("hoverable").addClass("faded-2");
		$("#writing").removeClass("hoverable").addClass("faded-3");
		$("#bio-alt").removeClass("faded-1 faded-2 faded-3");
		$("#resume-alt").removeClass("hoverable").addClass("faded-1");
		$("#coding-alt").removeClass("hoverable").addClass("faded-2");
		$("#writing-alt").removeClass("hoverable").addClass("faded-3");
	    }
	    if (id == "resume"){
		$("#bio").removeClass("hoverable").addClass("faded-1");
		$("#resume").removeClass("faded-1 faded-2 faded-3");
		$("#coding").removeClass("hoverable").addClass("faded-1");
		$("#writing").removeClass("hoverable").addClass("faded-2");
		$("#bio-alt").removeClass("hoverable").addClass("faded-1");
		$("#resume-alt").removeClass("faded-1 faded-2 faded-3");
		$("#coding-alt").removeClass("hoverable").addClass("faded-1");
		$("#writing-alt").removeClass("hoverable").addClass("faded-2");
	     }
	    if (id == "coding"){
		$("#bio").removeClass("hoverable").addClass("faded-2");
		$("#resume").removeClass("hoverable").addClass("faded-1");
		$("#coding").removeClass("faded-1 faded-2 faded-3");
		$("#writing").removeClass("hoverable").addClass("faded-1");
		$("#bio-alt").removeClass("hoverable").addClass("faded-2");
		$("#resume-alt").removeClass("hoverable").addClass("faded-1");
		$("#coding-alt").removeClass("faded-1 faded-2 faded-3");
		$("#writing-alt").removeClass("hoverable").addClass("faded-1");
	     }
	    if (id == "writing"){
		$("#bio").removeClass("hoverable").addClass("faded-3");
		$("#resume").removeClass("hoverable").addClass("faded-2");
		$("#coding").removeClass("hoverable").addClass("faded-1");
		$("#writing").removeClass("faded-1 faded-2 faded-3");
		$("#bio-alt").removeClass("hoverable").addClass("faded-3");
		$("#resume-alt").removeClass("hoverable").addClass("faded-2");
		$("#coding-alt").removeClass("hoverable").addClass("faded-1");
		$("#writing-alt").removeClass("faded-1 faded-2 faded-3");
	    }
	     if (id == "bio-alt"){
		$("#bio").removeClass("faded-1 faded-2 faded-3");
		$("#resume").removeClass("hoverable").addClass("faded-1");
		$("#coding").removeClass("hoverable").addClass("faded-2");
		$("#writing").removeClass("hoverable").addClass("faded-3");
		$("#bio-alt").removeClass("faded-1 faded-2 faded-3");
		$("#resume-alt").removeClass("hoverable").addClass("faded-1");
		$("#coding-alt").removeClass("hoverable").addClass("faded-2");
		$("#writing-alt").removeClass("hoverable").addClass("faded-3");
	    }
	    if (id == "resume-alt"){
		$("#bio").removeClass("hoverable").addClass("faded-1");
		$("#resume").removeClass("faded-1 faded-2 faded-3");
		$("#coding").removeClass("hoverable").addClass("faded-1");
		$("#writing").removeClass("hoverable").addClass("faded-2");
		$("#bio-alt").removeClass("hoverable").addClass("faded-1");
		$("#resume-alt").removeClass("faded-1 faded-2 faded-3");
		$("#coding-alt").removeClass("hoverable").addClass("faded-1");
		$("#writing-alt").removeClass("hoverable").addClass("faded-2");
	     }
	    if (id == "coding-alt"){
		$("#bio").removeClass("hoverable").addClass("faded-2");
		$("#resume").removeClass("hoverable").addClass("faded-1");
		$("#coding").removeClass("faded-1 faded-2 faded-3");
		$("#writing").removeClass("hoverable").addClass("faded-1");
		$("#bio-alt").removeClass("hoverable").addClass("faded-2");
		$("#resume-alt").removeClass("hoverable").addClass("faded-1");
		$("#coding-alt").removeClass("faded-1 faded-2 faded-3");
		$("#writing-alt").removeClass("hoverable").addClass("faded-1");
	     }
	    if (id == "writing-alt"){
		$("#bio").removeClass("hoverable").addClass("faded-3");
		$("#resume").removeClass("hoverable").addClass("faded-2");
		$("#coding").removeClass("hoverable").addClass("faded-1");
		$("#writing").removeClass("faded-1 faded-2 faded-3");
		$("#bio-alt").removeClass("hoverable").addClass("faded-3");
		$("#resume-alt").removeClass("hoverable").addClass("faded-2");
		$("#coding-alt").removeClass("hoverable").addClass("faded-1");
		$("#writing-alt").removeClass("faded-1 faded-2 faded-3");
	    }
	},function(){
	    addHoverable(
		function(){
		    console.log("this works");
		    if ($("#bio").hasClass("hoverable"))
			$("#bio").removeClass("faded-1 faded-2 faded-3");
		    if ($("#resume").hasClass("hoverable"))
			$("#resume").removeClass("faded-1 faded-2 faded-3");
		    if ($("#coding").hasClass("hoverable"))
			$("#coding").removeClass("faded-1 faded-2 faded-3");
		    if ($("#writing").hasClass("hoverable"))
			$("#writing").removeClass("faded-1 faded-2 faded-3");
		    if ($("#bio-alt").hasClass("hoverable"))
			$("#bio-alt").removeClass("faded-1 faded-2 faded-3");
		    if ($("#resume-alt").hasClass("hoverable"))
			$("#resume-alt").removeClass("faded-1 faded-2 faded-3");
		    if ($("#coding-alt").hasClass("hoverable"))
			$("#coding-alt").removeClass("faded-1 faded-2 faded-3");
		    if ($("#writing-alt").hasClass("hoverable"))
			$("#writing-alt").removeClass("faded-1 faded-2 faded-3");
		});
	});
    
});


    
    
    

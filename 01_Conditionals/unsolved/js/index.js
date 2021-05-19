
$('.tab').on("click", function(){

	if ($(this).hasClass("tab1")) {
		$(".tab1").addClass("active");
		$(".tab2").removeClass("active");
		$("#tabContent1").css("display", "block");
		$("#tabContent2").css("display", "none");


	}
	else if($(this).hasClass("tab2")){

		$(".tab2").addClass("active");
		$(".tab1").removeClass("active");
		$("#tabContent2").css("display", "block");
		$("#tabContent1").css("display", "none");
	}
  
});


// so in a bool the statment always has to be true. if the answer is false
//it runs the second one. 
//you can also put varibles in bools if (var)
//you can use varibles and > = + - with numbers like age gates
//$ ('class').on('click', fuction() {})
//declare varibles before if and else statements.


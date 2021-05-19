
$(".themeChange").on("click",function() {
	if($(this).hasClass("regular")){
		$("#theme").attr("href", "css/blank.css");

	}
	else if($(this).hasClass("blue")){
		$("#theme").attr("href", "css/blue.css");

	}
	else if($(this).hasClass("dark")){
		$("#theme").attr("href", "css/dark.css");
	}
});
// && means and || or (if one or both is true) !a a is false
//Because the default is true so if we wanted to make false the default we need to note it


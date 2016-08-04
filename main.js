//Main.js

setTimeout(function () {
	$( ".js-html5-slider" ).addClass( "html5free" );

	$( ".html5free" ).click(function() {
		if (localStorage["backend"] == "\"flash\"") {
			localStorage["backend"] = "\"mse\"";
			location.reload();
		} else if (localStorage["backend"] == "\"mse\"") {
			localStorage["backend"] = "\"flash\"";
			location.reload();
		} else {
			localStorage["backend"] = "\"mse\"";
			location.reload();
		}
	});
	console.log( "Kappa123" );
	//localStorage["backend"] = "\"flash\"";
	//localStorage["backend"] = "\"mse\"";
	if (localStorage["backend"] == "\"flash\"") {
		//alert("no");
	} else if (localStorage["backend"] == "\"mse\"") {
		//alert("yes");
	} else {
		localStorage["backend"] = "\"flash\"";
	}
	$( ".html5free" ).removeClass( "js-html5-slider" );
}, 5555);

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
	//localStorage["backend"] = "\"flash\"";
	//localStorage["backend"] = "\"mse\"";
	if (localStorage["backend"] == "\"flash\"") {
		c = "flash";
	} else if (localStorage["backend"] == "\"mse\"") {
		c = "mse";
	} else {
		localStorage["backend"] = "\"flash\"";
		c = "flash";
	}
	$( ".html5free" ).removeClass( "js-html5-slider" );
	console.log( "%c↓ [html5free] ↓", "color: darkblue;" );
	console.log( "ready" );
	console.log( "current: "+c );
	console.log( "%c↑ [html5free] ↑", "color: darkblue;" );
}, 5678);

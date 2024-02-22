//


//

$(document).ready(function () {
	$("#saberi").click(function () {
		var broj1 = $("#broj1").val();
		var broj2 = $("#broj2").val();
		broj1 = parseInt(broj1);
		broj2 = parseInt(broj2);
		$("#rezultat").text(broj1 + broj2);
		// console.log(broj1 + broj2);
	});
	$("#pomnozi").click(function () {
		var broj1 = $("#broj1").val();
		var broj2 = $("#broj2").val();

		console.log(broj1 + broj2);
		broj1 = parseInt(broj1);
		broj2 = parseInt(broj2);
		if (broj1 == 0) {
			$("#rezultat").text("Ne moze se mnoziti sa nulom");
		} else if (broj2 == 0) {
			$("#rezultat").text("Ne moze se mnoziti sa nulom");
		} else {
			$("#rezultat").text(broj1 * broj2);
		}
	});
	$("#oduzmi").click(function () {
		var broj1 = $("#broj1").val();
		var broj2 = $("#broj2").val();
		console.log(broj1 + broj2);
		broj1 = parseInt(broj1);
		broj2 = parseInt(broj2);
		$("#rezultat").text(broj1 - broj2);
	});
	$("#podeli").click(function () {
		var broj1 = $("#broj1").val();
		var broj2 = $("#broj2").val();
		if (broj1 == 0) {
			$("#rezultat").text("Ne moze se deliti sa nulom");
		} else if (broj2 == 0) {
			$("#rezultat").text("Ne moze se deliti sa nulom");
		} else {
			$("#rezultat").text(broj1 / broj2);
		}
	});
});
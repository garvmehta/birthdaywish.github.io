var number=6;
	var x= setInterval(function count() {
		number--;
		document.getElementById('one').innerHTML=number;
		if (number==0) {
		clearInterval(x);
		document.getElementById('count').style.display="none";
		document.getElementById('container').style.display="block";
		document.getElementById('rain').style.display="block";

	}
	},1000);
	
window.onload = function() {
	button.onclick = function() {
		document.getElementById('homePage').classList.remove('homePage');
		document.getElementById('homePage').classList.add('displayNone');
		secondPage.style.display = "flex";
		/*alert("zhopa");*/
	};
	buttonSP1.onclick = function() {
		secondPage.style.display = "none";
		document.getElementById('homePage').classList.add('homePage');
	};
	buttonSP2.onclick = function() {
		secondPage.style.display = "none";
	};
	/*alert("sraka");*/





};
window.onload = function() {
	button.onclick = function() {
		/*document.getElementById('homePage').classList.remove('homePage');
		document.getElementById('homePage').classList.add('displayNone');*/
		homePage.style.display = "none";
		secondPage.style.display = "flex";
		/*alert("zhopa");*/
	};
	menu.onclick = function() {
		/*document.getElementById('homePage').classList.remove('homePage');
		document.getElementById('homePage').classList.add('displayNone');*/
		homePage.style.display = "none";
		menuPage.style.display = "flex";
	}
	menu1.onclick = function() {
		menuPage.style.display = "none";
		secondPage.style.display = "flex";
	} 
	menu2.onclick = function() {
		menuPage.style.display = "none";
		thirdPage.style.display = "flex";
	} 

	buttonSP1.onclick = function() {
		secondPage.style.display = "none";
		homePage.style.display = "flex";
	};
	buttonSP2.onclick = function() {
		secondPage.style.display = "none";
		thirdPage.style.display = "flex";
	};
	buttonMP1.onclick = function() {
		menuPage.style.display = "none";
		homePage.style.display = "flex";
	}
	menuSP.onclick = function() {
		secondPage.style.display = "none";
		menuPage.style.display = "flex";
	}
	homeP.onclick = function() {
		secondPage.style.display = "none";
		homePage.style.display = "flex";
	}

	buttonTP1.onclick = function() {
		thirdPage.style.display = "none";
		secondPage.style.display = "flex";
	}
	videoContent.onclick = function() {
		video = document.getElementById('video');
		video.play();
	}
	/*alert("sraka");*/
};
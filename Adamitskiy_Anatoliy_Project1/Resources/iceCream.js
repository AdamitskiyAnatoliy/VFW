//	Anatoliy Adamitskiy
//	Visual Frameworks

var i = 0;

nextButton.addEventListener("click", nextBut = function() {
	
	
	
	if(i < 6) {
		
		mainText.text = flavors[i++];
		
	} else {
		
		i = 0;
		mainText.text = flavors[i++];
		
	}
		
});



previousButton.addEventListener("click", prevBut = function() {
	
	
	
	if(i >= 0) {
		
		mainText.text = flavors[i--];
		
	} else {
		
		i = 5;
		mainText.text = flavors[i--];
		
	}
	
});

var win = Ti.UI.createWindow({
	
	backgroundColor: "#fff"
	
});

//1.UI components, 2. Progress Timer 3. Decrement Timer, 4. listeners

var progress = Ti.UI.createProgressBar({
	
	min: 0,
	max: 100,
	value:30,
	message: "Can you stop the progress?",
	width: "70%"
	
});

var randomView = Ti.UI.createView({
	
	width: "10%",
	height: "10%",
	background: "blue",
	borderColor: "black"
	
});

var increment = function() {
	
	if(progress.value < 100){
		
		//increase timer
		//move box
		progress.fireEvent("update", {value: 1});
		randomView.left = Math.random()*Ti.UI.Platform.displayCaps.platformWidth;
		randomView.top = Math.random()*Ti.UI.Platform.displayCaps.platformHeight;
		
	} else {
		
		//game over message
		Ti.App.fireEvent("complete");
		alert("YOU FAIL!!!!!");
	
	}
	
};

var progTimer = setInterval(increment, 1000); 

progress.addEventListener("update", function(evt) {
	
	progress.value = progress + evt.value;
	
});

Ti.App.addEventListener("complete", function() {
	
	progress.hide();
	randomView.hide();
	clearInterval(progTimer);
	
});

var decrament = function() {
	
	if (progress.value <= 0) {
		
		Ti.App.fireEvent("complete");
		alert("You Won");
		
	} else {
		
		progress.fireEvent("update", {value: -1});
		
	}
	
};

randomView.addEventListener("click", decrament);

win.add(randomView);
win.add(progress);
progress.show();
win.open();

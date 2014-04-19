var createViews = function() {
	var arry = [];
	for(var i = 0, j = galleryList.length; i < j; i++){
		
		var newView = Ti.UI.createImageView({
			backgroundColor: "#fff",
			image: "Images/" + galleryList[i],
			title: galleryList[i]
		});
		
		arry.push(newView);
		
	}
	
	//console.log(newView.index);
	return arry;
	
};

var scrollableView = Ti.UI.createScrollableView({
	pagingControlColor: "#333",
	views: createViews()
});
	
/*var newImage = function(e) {
		//var imageIndex = newView.index;
		currentImages.currentPage = e.index;
};*/
	
var openImage = function(e) {
	
	//console.log(e);
	//console.log(e.source.index);
	
	//var test = e.source.index;
	createViews.currentPage = e.source.index;
	
	//console.log(imageIndexNumber);
	
	//console.log(createViews.currentPage);

	//var test = this.title;
	var imageWindow = Ti.UI.createWindow({

		backgroundColor : "#b1b1b0",
		titleControl: Ti.UI.createLabel({
			
			//title: this.title,
			text: this.title,
			height: 10,
			width: 100,
			backgroundColor: "#999"
			
		})

	});
	
	var showName = function(){
		//console.log(test.currentPage);
		
		imageWindow.titleControl.text = this.views[this.currentPage].title;
		
	};
	
	navWindow.openWindow(imageWindow);
	imageWindow.add(scrollableView);
	scrollableView.addEventListener("scrollend", showName);
	
	
};

// Opening Image Tile View

for (var i = 0, j = galleryList.length; i < j; i++) {

	var image = Ti.UI.createImageView({

		top : spacing,
		left : spacing,
		width : newSize,
		image : "Images/" + galleryList[i],
		height : newSize,
		index: i //rich note
		
	});
	viewContainer.add(image);
	image.addEventListener("click", openImage);
};

image.addEventListener('click',function(ev){
	//console.log(ev.source);
	
	openImage(ev.source);
});
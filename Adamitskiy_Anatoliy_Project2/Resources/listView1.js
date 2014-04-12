var listButton = function() {

	var listWindow = Ti.UI.createWindow({

		backgroundColor : "#f3872a",
		title : this.title

	});

	var detailText = Ti.UI.createLabel({

		text : this.desc,
		font : {
			fontSize : "18dp",
			fontFamily : "Arial"
		}

	});

	listWindow.add(detailText);
	navWindow.openWindow(listWindow);
	listWindow.add(listViewCreate);

};

var listViewCreate = Ti.UI.createListView({

	backgroundColor : "#f3872a",

});

var listSection = Ti.UI.createListSection({

	headerTitle : "MINIONS",
	footerTitle : "List of Minions"

});

var listSection2 = Ti.UI.createListSection({

	headerTitle : "CHARACTERS",
	footerTitle : "List of Characters"

});

var sections = [listSection, listSection2];

var data = [{
	properties : {
		title : file.myList.minions.items[0].name,
		description : file.myList.minions.items[0].description,
		accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
	}
}, {
	properties : {
		title : file.myList.minions.items[1].name,
		description : file.myList.minions.items[1].description,
		accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
	}
}, {
	properties : {
		title : file.myList.minions.items[2].name,
		description : file.myList.minions.items[2].description,
		accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
	}
}];

var data2 = [{
	properties : {
		title : file.myList.characters.items[0].name,
		description : file.myList.characters.items[0].description,
		accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
	}
}, {
	properties : {
		title : file.myList.characters.items[1].name,
		description : file.myList.characters.items[1].description,
		accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
	}
}, {
	properties : {
		title : file.myList.characters.items[2].name,
		description : file.myList.characters.items[2].description,
		accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
	}
}];

listViewCreate.addEventListener("itemclick", function(x){
	
	
	var tableWindow = Ti.UI.createWindow({

		backgroundColor : "#f3872a",
		//title : event.title

	});
	
	
	
	for (var j = 0, k = file.myList.length; j < k; j++) {

	var tableRow = ({

			title : file.myList[j].items[k].name,
			desc : file.myList[j].items[k].description

		});

	

}
	//tableWindow.add(tableRow);
	navWindow.openWindow(tableWindow);
});

listSection2.setItems(data2);
listSection.setItems(data);
listViewCreate.sections = sections;
listView.addEventListener("click", listButton);

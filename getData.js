function httpGetAsync(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var mapData = xmlHttp.responseText;
			return mapData;
		}
    }
    xmlHttp.open("GET", "https://opendata.arcgis.com/datasets/7267d01b1348498694d887b091d735c7_12.geojson", true);
    xmlHttp.send();
}
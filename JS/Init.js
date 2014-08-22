window.onload = initJS;
function initJS(){
	if(self.initExternalLinks) initExternalLinks()
}
function initExternalLinks() { 
	if(!document.getElementsByTagName) return
	var anchors = document.getElementsByTagName("a")
	for(var i=0; i<anchors.length; i++) { 
		var anchor = anchors[i]
		if(anchor.getAttribute("href")) anchor.target = anchor.getAttribute("rel")
	}
}
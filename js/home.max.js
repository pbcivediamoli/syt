this.addEventListener&&addEventListener("DOMContentLoaded",function(){
	var
		document = this.document,
		link = document.getElementsByTagName("head")[0].appendChild(
			document.createElement("link")
		)
	;
	link.rel = "styleSheet";
	link.type = "text/css";
	link.href = "css/font.css";
	document = link = null;
},false);
function displayAPIInfo(id, api, baseUrl) {
	if(!(api instanceof Object)) {
		api = JSON.parse(api);
	}
	var infoHtml = `
	<li>${window.location.origin}${baseUrl}${api.uri}<li>
	<li>Description: ${api.description}</li>
	`;
	if(api.params) {
		infoHtml += "<li> Parameters:<ul>";
		for(var i in api.params) {
			infoHtml += `<li>${api.params[i].name} - ${api.params[i].type}: ${api.params[i].description}</li>`;
		}
		infoHtml += "</ul></li>";
	}
	if(api["return"]) {
		infoHtml += `<li>Return: ${api["return"]}</li>`;
	}
	updateElementValue(id, infoHtml, true);
}
let viewsEnabled;
let viewsIntervalTime;

$( document ).ready(function() {
    console.log("Zendesk refresh extension has been activated!");
	console.log("Views enabled: " + viewsEnabled);
	console.log("Views refresh seconds: " + viewsIntervalTime);

	if (viewsEnabled) {
		var zendeskIntervalId = window.setInterval(function(){
			$(`button[aria-label="Refresh views pane"]`).click()
		}, viewsIntervalTime * 1000);
	} else {
		console.log("Zendesk refresh extension has been stopped manually!");

		if (zendeskIntervalId) {
			clearInterval(zendeskIntervalId);
		}
	}
});

let viewsEnabled = true;
let viewsIntervalTime = 10;

$( document ).ready(function() {
    console.log("Zendesk refresh extension has been activated!");
	console.log("Views enabled: " + viewsEnabled);
	console.log("Views refresh seconds: " + viewsIntervalTime);

	if (viewsEnabled) {
		var zendeskIntervalId = window.setInterval(function(){
			$(`button[data-test-id="views_views-list_header-refresh"]`).click()
			console.log("Refreshing views ...");
		}, viewsIntervalTime * 1000);
	} else {
		console.log("Zendesk refresh extension has been stopped manually!");

		if (zendeskIntervalId) {
			clearInterval(zendeskIntervalId);
		}
	}
});

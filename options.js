function saveOptions() {
	let viewsEnabled = document.getElementById('views').checked;
	let viewsIntervalTime = document.getElementById('viewsInterval').value;
	chrome.storage.sync.set({
		viewsEnabled: viewsEnabled,
		viewsIntervalTime: notSmallerThanOne(viewsIntervalTime)
	}, () => {
		loadOptions();
		document.getElementById('status').innerHTML = 'Options updated. <br/>Please refresh any tabs that have zendesk open.';
	});
}

function notSmallerThanOne(num) {
	return num >= 1 ? num : 1;
}

function loadOptions() {
	chrome.storage.sync.get({
		viewsEnabled: true,
		viewsIntervalTime: 5
	}, items => {
		document.getElementById('views').checked = items.viewsEnabled;
		document.getElementById('viewsInterval').value = items.viewsIntervalTime;
	});
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('saveOptions').addEventListener('click', saveOptions);
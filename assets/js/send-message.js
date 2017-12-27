$(document).ready(function() {
	$("#send-message").click(function() {
		let sendMessagesKey = "message_for_" + getRecipient();
		let messages = JSON.parse(localStorage.getItem(sendMessagesKey));
		messages.push(`<div>From: ${getUsername()}</div>` + $("#text-area").val());
		localStorage.setItem(sendMessagesKey, JSON.stringify(messages));
	});
});

function getRecipient() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("match");
}

function goMessages() {
  window.location.href = "messages.html?username=" +  getSender() + getUsername();
}

function getSender() {
	let urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("username");
}




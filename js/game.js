$(document).ready(function() {
	// Welcome
	$("#error-count").html(BACKSPACE_ERRORS);
	log("JavaScript initialized and now ready!");
	reply("Welcome to the game! Your objective is to reach the lecture hall because you are late!<br><br>");

	reply(PLAYER.currentRoom.getFullDesc());

	$("#speak").focus();

	$("#form").on("submit", function(e) {
		e.preventDefault();

		// Get the input
		var input = $("#speak").val().trim();
		said(input); // Ouput what said
		$("#speak").val(""); // Reset input

		// Get string and replace all non characters
		var split_input = input.replace(/[^a-z ]/ig, "").toLowerCase().split(" ");
		
		// Do work
		processCommand(split_input);

	});
});
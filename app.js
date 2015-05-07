var main = function () {
	"use strict";

	$(".comment-input button").on("click", function (event) {
		var $new_comment = $("<p>"),
			comment_text = $(".comment-input input").val();

// single line version, study later
//var $new_comment = $("<p>").text($(".omment-input input").val);

		$new_comment.text("comment_text");

		$(".comments").append($new_comment);
	});
};

$(document).ready(main);
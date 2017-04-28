$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();
		var button = $(this);
		var filter = button.data("filter");
		button.toggleClass("active")
		// add a class called "active" to everything when we click reset.
		if (filter === "reset") {
			$(".item").addClass("active");
			$(".filter").addClass("active");
			// $(".resetbutton.active").addClass("active");
			// when we don't click reset, do something else.
		} else {
			$(".item").addClass("active");
			$(".item.active").removeClass("active");
			$(".images.active").removeClass("active");
			$(".resetbutton.active").removeClass("active");
			$(".filter.active").each(function () {
				var this_filter = $(this);
				var filter = this_filter.data("filter");
				$("." + filter).addClass("active");
			});
		}
	});
});

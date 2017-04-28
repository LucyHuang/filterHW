$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();
		var button = $(this);
		var filter = button.data("filter");
		button.toggleClass("active")
		if (filter === "reset") {
			$(".item").addClass("active");
			$(".filter").addClass("active");
		} else {
			$(".item").addClass("active");
			$(".item.active").removeClass("active");
			$(".images.active").removeClass("active");
			$(".filter.active").each(function () {
				var this_filter = $(this);
				var filter = this_filter.data("filter");
				$("." + filter).addClass("active");
			});
		}
	});
});

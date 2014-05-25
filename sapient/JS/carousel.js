$(function () {
    url = '../sapient/json/carousel-data.json';
    $.getJSON(url, function (d) {
        $.each(d, function (i, o) {
            if (i == 0) {
                $("<li data-target='#carousel' data-slide-to=" + i + " class='active'></li>").appendTo('.carousel-indicators');
                $("<div class='item active'> <img src=" + o.image + "  alt='img' /><div class='carousel-caption'><h3>" + o.heading + "</h3><p>" + o.text + "</p></div></div>").appendTo('.carousel-inner');
            } else {
                $("<li data-target='#carousel' data-slide-to=" + i + "></li>").appendTo('.carousel-indicators');
                $("<div class='item'> <img src=" + o.image + "  alt='img' /><div class='carousel-caption'><h3>" + o.heading + "</h3><p>" + o.text + "</p></div></div>").appendTo('.carousel-inner');
            }
        });
    }).always(function () {
        var wi = $(".item").width();
        $(".item img").css('width', wi + 'px');
    });
    //Enable swiping...
    $(".carousel-inner").swipe({
        swipeLeft: function () {
            $(this).parent().carousel('next');
        },
        swipeRight: function () {
            $(this).parent().carousel('prev');
        },
        threshold: 0
    });
});
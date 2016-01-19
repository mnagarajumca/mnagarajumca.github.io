$(function() {
   $(".navbar-nav li,#scroll_up").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },500);
	 });
$("img[src*='jet']").click(function() {
  $("#jet").addClass("jet");
});
	 $('.txteffect').textillate({in: {    effect: 'zoomInDown' } });
	
    $("#top-navigation a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    });
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
    $('.emptline .timeline-left:eq(0)').waypoint(function() {
		$('.empheading').addClass('in');
		 $('.empheading').textillate({in: {effect: 'bounceInLeft' } });
        $('.emptline .timeline-left:eq(0)').addClass('fadeInLeft in');
    }, {
        offset: '80%'
    });
    $('.emptline .timeline-inverted').waypoint(function() {
        $('.emptline .timeline-inverted').addClass('fadeInRight in');
    }, {
        offset: '80%'
    });
	$('.emptline .timeline-left:eq(1)').waypoint(function() {
        $('.emptline .timeline-left:eq(1)').addClass('fadeInLeft in');
    }, {
        offset: '80%'
    });
    $('.edutline .timeline-left').waypoint(function() {
			$('.eduheading').addClass('in');
		 $('.eduheading').textillate({in: {effect: 'bounceInLeft' } });
        $('.edutline .timeline-left').addClass('fadeInLeft in');
    }, {
        offset: '80%'
    });
    $('.edutline .timeline-inverted').waypoint(function() {
        $('.edutline .timeline-inverted').addClass('fadeInRight in');
    }, {
        offset: '80%'
    });
	$('.progress-bar').waypoint(function() {
			$('.skillheading').addClass('in');
		 $('.skillheading').textillate({in: {effect: 'bounceInLeft' } });
        $('.progress-bar').addClass('fadeInLeft in');
    }, {
        offset: '80%'
    });
	$('#contact').waypoint(function() {
		$('.contheading').addClass('in');
		 $('.contheading').textillate({in: {effect: 'bounceInLeft' } });
        $('#contact').addClass('bounceInRight in');
    }, {
        offset: '80%'
    });
});
function initialize() {
    var myLatLng = {
        lat: 12.9852629,
        lng: 77.7434198
    };
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(12.9852629, 77.7434198),
        zoom: 8
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var infowindow = new google.maps.InfoWindow({
        content: "<p>M.Naga Raju,</p><p> Interactive Developer L2, Sapient</p><p>Mobile : 08951483816</p><p>Email : mnagarajumca@gmail.com</p>"
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'M.Naga Raju, Interactive Developer, Sapient'
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', initialize);
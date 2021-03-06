$(function() {
	var todat = new Date();
    var todate = todat.getDate();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var datMonth = month[todat.getMonth()];
    var datYear = todat.getFullYear().toString().substr(2, 2);
    var monthStart = new Date(todat.getFullYear(), todat.getMonth(), 1);
    var monthEnd = new Date(todat.getFullYear(), todat.getMonth() + 1, 1);
    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24)
    var chtdate = todate / monthLength * 100;
    var chtmonth = (todat.getMonth() + 1) / 12 * 100;
    $('.tday').text(todate).data('percent', chtdate);
    $('.tmonth').text(datMonth).data('percent', chtmonth);
    $('.tyear').text(datYear).data('percent', datYear);
    $('.chart').easyPieChart({
        scaleColor: '#fff',
        trackColor: '#C3E0E6',
        barColor: '#337ab7',
		lineCap:'square',
        animate: 2000
    });

   $(".navbar-nav li,#scroll_up").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },500);
	 });
$("img[src*='jet']").click(function() {
  $("#jet").addClass("jet");
  setTimeout(function(){
  $("#jet").removeClass("jet");
  },1000);
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
        content: "<p>M.Naga Raju,</p><p>Technical Lead at Aricent</p><p>Mobile : 08951483816</p><p>Email : mnagarajumca@gmail.com</p>"
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'M.Naga Raju, Technical Lead at Aricent'
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', initialize);
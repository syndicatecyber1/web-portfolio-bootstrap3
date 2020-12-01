// event pada saat di klik
$('.page-scroll').on('click', function(e){

	//ambil isi href

	var tujuan = $(this).attr('href');

	//tangkap elemen
	var elemenTujuan = $(tujuan);


	//pindahkan Scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'swing');

	e.preventDefault();
	

});



//Parallax

//about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});




$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px,'+ wScroll/2 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wScroll/1 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px,'+ wScroll/0.5 +'%)'
	});



 //portfolio
 if (wScroll > $('.portfolio').offset().top - 250) {
 	$('.portfolio .thumbnail').each(function(i) {
 		setTimeout(function(){
 		$('.portfolio .thumbnail').eq(i).addClass('muncul');
 		},300 * (i+1));
 	});
 }




});
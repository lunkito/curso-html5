$(document).ready(function() {
  /*SLIDER*/
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });


	/*ACCORDION*/
	$('.accordion').accordion({
		transitionSpeed: 400,
		transitionEasing: 'ease'
	});


	/*OUIBOUNCE*/
	ouibounce(document.getElementById('modal-card'), {
		aggressive: false,   //No borra la cookie viewedOuiBounceModal
		timer: 5             //Espera a que carge la pag (falso positivo)
	});
});


/*SweetAlert2*/
function mensaje() {
	swal({
		title: 'Título',
		text: 'Mensaje de TEXTO',
		html: '<p>Mensaje con <h1>formato</h1></p>',
		confirmButtonText: 'Ok <i class="fa fa-thumbs-up">',
		cancelButtonText: 'Buh <i class="fa fa-thumbs-down">',
		showCancelButton: true,
		type: 'success',
		timer: 3000,
	}).then(
		function(){ swal('Aceptado') },
		function(){ swal('Cancelado') }
	);
}

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

  /*COOKIES*/
  $('.cookie-message').cookieBar({
    closeButton: '.close'
  });

  // AWESOMPLETE
  var input = document.getElementById('datos')
  new Awesomplete(input, {
    list:["Auto", "Autocompletar", "Awesome",
     "Much", "Doge", "WoW"],
    minChars: 1
  });

  // SELECTIZE
  $('#input-tags').selectize({
    plugins: ['remove_button'],
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
    // otros plugins requieren jQuery UI
  });

  //TRUMBOWYG
  $('#trumbowyg-demo').trumbowyg({
    svgPath: 'https://rawgit.com/lunkito/curso-html5/master/img/icons.svg',
    lang: 'es',
  });

  //QUILL
  var quill = new Quill('#editor', {
    theme: 'snow'
  });

  //WAYPOINT
  var waypoint = new Waypoint({
    element: document.getElementById('main'),
    handler: function(direction) {
      if (direction == 'down') {
        swal('Waypoint!');
        this.destroy();
      }
    }
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

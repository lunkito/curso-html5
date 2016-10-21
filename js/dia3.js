$(document).ready(function(){
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
})

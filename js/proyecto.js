window.addEventListener('DOMContentLoaded', function() {
  impress = impress()
  impress.init()
  var act = 0
  var btn = document.getElementById('btn')
  var inp = document.getElementById('inp')

  document.addEventListener('keydown', function(ev) {
    if(act > 13)
      act = 0

    if(ev.keyCode == 65)
      impress.goto(act -= 2)

    if(ev.keyCode == 68)
      impress.goto(act += 2)

    if(ev.keyCode == 32 || ev.keyCode == 39)
      act += 1

    if(ev.keyCode == 37)
      act -= 1
  })

  document.addEventListener('click', masdos)
  function masdos() {
    impress.goto(act += 2)
  }

  // CountUp
  var options = {
    useEasing : true,
    useGrouping : true,
    separator : ',',
    decimal : '.',
    prefix : '',
    suffix : ''
  };
  var cuenta = new CountUp("numero", 0, 10, 0, 6, options)
  $('#numero').hover(function() {
    cuenta.start()
  })

  /*Accordion*/
  $('.accordion').accordion()
  var clickEv = true
  if (clickEv) {
    $('#problit').hover(function() {
      document.removeEventListener('click', masdos)
      clickEv != clickEv
    })
    // document.removeEventListener('click', function( event ) {
    //   var target = event.target;
    //
    //   // Find closest step element that is not active
    //   while ( !( target.classList.contains( "step" ) &&
    //             !target.classList.contains( "active" ) ) &&
    //             ( target !== document.documentElement ) ) {
    //       target = target.parentNode;
    //   }
    //
    //   if ( api.goto( target ) ) {
    //       event.preventDefault();
    //   }
    // })
  }
})

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

  document.addEventListener('click', function() {
    impress.goto(act += 2)
    console.log(act)
  })
})

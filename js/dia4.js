$(document).ready(function() {
  //CHARTIST
  var data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    series: [
      { data: [2, 4, -2, 8, 5] },
      { data: [4, 3, 6, 1, 2] },
      { data: [3, 5, 1, 7, -5] }
    ]
  };

  var options = {}
  new Chartist.Line('.chart', data, options);
  new Chartist.Bar('.chart2', data, options);

  var dataPie = {
    series: [20, 15, 5, 50, 26]
  }
  var optionsPie = {
    donut: true,
    donutWidth: 50,
    startAngle: 180
  }
  new Chartist.Pie('.chart3', dataPie, optionsPie);

  // JS SEQUENCE DIAGRAMS
  var sample = 'A->B: Perro';
  var sample1 = 'Title: Esto es un título';
  var sample2 = 'B-->C: Línea a rayas';
  var sample3 = 'C->>D: Línea con flecha hueca';
  var sample4 = 'D-->>E: Línea a rayas con flecha hueca';
  var sample5 = 'A->C: Uno \n B->C: Dos';
  var diagram = Diagram.parse(sample)
  var diagram1 = Diagram.parse(sample1)
  var diagram2 = Diagram.parse(sample2)
  var diagram3 = Diagram.parse(sample3)
  var diagram4 = Diagram.parse(sample4)
  var diagram5 = Diagram.parse(sample5)

  diagram.drawSVG('diagram', {
    theme: 'hand'
  })
  diagram1.drawSVG('diagram1', {
    theme: 'simple'
  })
  diagram2.drawSVG('diagram2', {
    theme: 'hand'
  })
  diagram3.drawSVG('diagram3', {
    theme: 'simple'
  })
  diagram4.drawSVG('diagram4', {
    theme: 'hand'
  })
  diagram5.drawSVG('diagram5', {
    theme: 'simple'
  })


  // GRAPHVIZ (Viz.js)
  var sample = 'digraph nombreGrafo { Inicio -> Medio -> Fin [label="EY!"];  Inicio -> "Medio Alternativo" -> Fin}';
  var options = {
   format: 'svg' // o 'png-image-element'
  }
  var image = Viz(sample, options);
  var graph = document.getElementById('graph');
  graph.innerHTML = image; // SVG
  // graph.appendChild(image);  PNG


  // TABLESORT
  var tabla = document.getElementById('tablesort');
  new Tablesort(tabla);


  /*FLIP*/
  $('#card').flip({
    axis: 'x',       // y
    trigger: 'hover' // click
  });

  // LAZY LOAD
  /*Cosa rara, primero carga la pagina las img y con .ready() salta el unveil(); Se arregla con backend, que no cargue clases de las img*/
  $('img').unveil();


  /*PhotoSPhereViewer*/
  // var PSV = PhotoSphereViewer({
  //   panorama: 'https://rawgit.com/lunkito/curso-html5/master/img/panoramica-la-palma.jpg?raw=true',
  //   container: 'photosphere',
  //   loading_img: 'https://rawgit.com/lunkito/curso-html5/master/img/6.gif?raw=true'
  // });

  var PSV = PhotoSphereViewer({
    panorama: 'https://cdn.rawgit.com/mistic100/Photo-Sphere-Viewer/master/example/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
    container: 'photosphere',
    caption: 'Hola amigos míos',
    loading_img: 'https://media.giphy.com/media/TtZqlvHid7BjW/giphy.gif',
  });

});

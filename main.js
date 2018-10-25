function clasica() {

  var i = 0;
  var texto = 'ABCDEFG';
  var speed = 30;
  var enlace = "#"

  var urla = 'https://newsapi.org/v2/top-headlines?' +
    'country=co&' +
    'language=es&' +
    'apiKey=890ed3b022e44dedaae9d79d12a03426';



  $.ajax({
    url: urla,
    type: 'GET',
    success: function (res) {
      console.log(res)
      let elNum = parseInt(Math.random(0, res.articles.length) * 20)
      console.log(elNum)

      texto = res.articles[elNum].title;
      enlace = res.articles[elNum].url;
      $("#demo").attr("href", enlace);
      document.getElementById("demo").innerHTML = "";
      typeWriter();
    }
  });


  function typeWriter() {
    if (i < texto.length) {
      $("#cargador").hide();
      document.getElementById("demo").innerHTML += texto.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      $("#cargador").show();
      //promesa();
    }
  }

}
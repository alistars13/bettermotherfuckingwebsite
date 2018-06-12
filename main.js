//Pop Up "youporn"!
setTimeout(
    function() {
      window.alert("Viens sur www.youporn.com c'est super cool !");
    }, 2 * 1000);


// changement des parametres apres button.
var i;
function modePsy()
{
  document.body.style.backgroundColor= "Blue";

  var para = document.querySelectorAll('p, li, h1, h2, h3, a');

  for (i=0; para.length; i++){
    para[i].style.color= 'white';
}

  var titres = document.querySelector('h1, h2, h3');

  for (i=0; titres.length; i++){
    titres[i].style.color= 'white';
}
};

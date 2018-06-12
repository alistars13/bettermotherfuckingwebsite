/*//Pop Up "youporn"!
setTimeout(
    function() {
      window.alert("Viens sur www.youporn.com c'est super cool !");
    }, 2 * 1000);
*/
// changement des parametres apres button.
var i;
function modePsy()
{
  document.body.style.backgroundColor= "Blue";

  var para = document.querySelectorAll('p, li, h1, h2, h3, a');

  for (i=0; para.length; i++){
    para[i].style.color= 'white';
}; // ça focntionne jusque ici, ensuite la deuxieme partie du script ne s'excute pas.

  var top = document.querySelector('h1, h2, h3');

  for (y=0; top.length; i++){
    top[y].style.color= 'white';
}
}

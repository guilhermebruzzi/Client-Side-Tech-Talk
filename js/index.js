/*$(document).ready(function(){
    $("#container-body").click(function(){
       $(this).css("background-color", "#666666")
    });
*/

window.addEventListener("load", function(){

    function escondeFotosEmLocalStorage(){
        if(typeof(Storage)!=="undefined")
        {
            var fotos = localStorage.getItem("fotos_indices");
            if(typeof(fotos)!=="undefined" && fotos){
                for (var i = 0; i < fotos.length; i++){
                    var foto_index = fotos[i];
                    var foto = document.querySelector("#furby" + foto_index);
                    foto.style.display = "none";
                }
            }
        }
    }

    function salvaFotoEscondidaNaLocalStorage(foto_index){
        if(typeof(Storage)!=="undefined")
        {
            var fotos = localStorage.getItem("fotos_indices");
            if(typeof(fotos)!=="undefined" && fotos){
                fotos.push(foto_index)
                localStorage.setItem("fotos_indices", fotos)
            }
            else{
                localStorage.setItem("fotos_indices", [foto_index])
            }

        }
    }

    escondeFotosEmLocalStorage();

    var furbys = document.querySelectorAll(".furby");
    for (var i = 0; i < furbys.length; i++){
        furbys[i].addEventListener("click", function(){
            this.style.display = "none";
            salvaFotoEscondidaNaLocalStorage(i);
        }, false);
    }


    var corpo = document.querySelector("#container-body");
    corpo.addEventListener("click", function(){
        this.style.backgroundColor = "#666666";
    }, false);

}, false);

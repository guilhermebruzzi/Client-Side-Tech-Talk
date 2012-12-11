window.addEventListener("load", function(){

    function escondeFotosEmLocalStorage(){
        if(typeof(Storage)!=="undefined")
        {
            for (var i = 0; i < 3; i++){
                var foto_index = localStorage.getItem("foto_index" + i.toString());
                if(foto_index){
                    var foto = document.querySelector("#furby" + i);
                    foto.style.display = "none";
                }
            }
        }
    }

    function salvaFotoEscondidaNaLocalStorage(foto_index){
        if(typeof(Storage)!=="undefined")
        {
            localStorage.setItem("foto_index" + foto_index.toString(), true);
        }
    }

    escondeFotosEmLocalStorage();

    var furbys = document.querySelectorAll(".furby");
    for (var i = 0; i < 3; i++){
        furbys[i].addEventListener("click", function(){
            var foto_index = parseInt(this.dataset.index, 10);
            this.style.display = "none";
            salvaFotoEscondidaNaLocalStorage(foto_index);
        }, false);
    }


    var corpo = document.querySelector("#container-body");
    corpo.addEventListener("click", function(){
        this.style.backgroundColor = "#666666";
    }, false);

}, false);

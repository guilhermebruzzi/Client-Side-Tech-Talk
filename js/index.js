var localStoragePolyfill = {}; 

//localStoragePolyfill.clear();

function escondeFotosEmLocalStorage(){
	var localStorage = window.localStorage;

	if (typeof window.localStorage == 'undefined'){
		localStorage = localStoragePolyfill;
	}

	for (var i = 0; i < 3; i++){
		var foto_index = localStorage.getItem("foto_index" + i.toString());
		if(foto_index){
			var foto = document.querySelector("#furby" + i);
			foto.style.display = "none";
		}
	}
}

function salvaFotoEscondidaNaLocalStorage(foto_index){
	var localStorage = window.localStorage;

	if (typeof window.localStorage == 'undefined'){
		localStorage = localStoragePolyfill;
	}

	localStorage.setItem("foto_index" + foto_index.toString(), true);
}

function main(){
    if (typeof window.localStorage == 'undefined'){
	    localStoragePolyfill = getLocalStorage();
    }

	/*Adiciona evento click nos furbys*/
	var furbys = document.querySelectorAll(".furby");
	for (var i = 0; i < 3; i++){
		furbys[i].addEventListener("click", function(){
			var foto_index = this.id.replace("furby", "");
			this.style.display = "none";
			salvaFotoEscondidaNaLocalStorage(foto_index);
		}, false);
	}

	/*Adiciona evento click no article corpo*/
	var corpo = document.querySelector("#container-body");
	corpo.addEventListener("click", function(){
		this.style.backgroundColor = "#666666";
	}, false);

	escondeFotosEmLocalStorage();
}

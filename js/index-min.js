var localStoragePolyfill={};function escondeFotosEmLocalStorage(){var b=window.localStorage;if(typeof window.localStorage=="undefined"){b=localStoragePolyfill}for(var c=0;c<3;c++){var a=b.getItem("foto_index"+c.toString());if(a){var d=document.querySelector("#furby"+c);d.style.display="none"}}}function salvaFotoEscondidaNaLocalStorage(a){var b=window.localStorage;if(typeof window.localStorage=="undefined"){b=localStoragePolyfill}b.setItem("foto_index"+a.toString(),true)}function main(){if(typeof window.localStorage=="undefined"){localStoragePolyfill=getLocalStorage()}var c=document.querySelectorAll(".furby");for(var a=0;a<3;a++){c[a].addEventListener("click",function(){var d=this.id.replace("furby","");this.style.display="none";salvaFotoEscondidaNaLocalStorage(d)},false)}var b=document.querySelector("#container-body");b.addEventListener("click",function(){this.style.backgroundColor="#666666"},false);escondeFotosEmLocalStorage()}if(typeof(Modernizr)!=="undefined"){Modernizr.load({test:Modernizr.localstorage,nope:"js/polyfill-min.js",complete:function(){main()}})}else{main()};
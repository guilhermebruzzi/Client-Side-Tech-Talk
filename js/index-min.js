window.addEventListener("load",function(){function e(){if(typeof(Storage)!=="undefined"){for(var g=0;g<3;g++){var f=localStorage.getItem("foto_index"+g.toString());if(f){var h=document.querySelector("#furby"+g);h.style.display="none"}}}}function d(f){if(typeof(Storage)!=="undefined"){localStorage.setItem("foto_index"+f.toString(),true)}}e();var c=document.querySelectorAll(".furby");for(var a=0;a<3;a++){c[a].addEventListener("click",function(){var f=parseInt(this.dataset.index,10);this.style.display="none";d(f)},false)}var b=document.querySelector("#container-body");b.addEventListener("click",function(){this.style.backgroundColor="#666666"},false)},false);
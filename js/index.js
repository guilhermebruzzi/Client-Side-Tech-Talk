/*$(document).ready(function(){
    $("#container-body").click(function(){
       $(this).css("background-color", "#666666")
    });
*/

window.addEventListener("load", function(){
    var corpo = document.querySelector("#container-body");
    corpo.addEventListener("click", function(){
        this.style.backgroundColor = "#666666";
    }, false);
}, false);

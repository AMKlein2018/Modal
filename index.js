var modal = document.getElementById('myModal');
var modalHeader = document.getElementById('modal-header');
var close = document.getElementById('close');


setTimeout (function (){
	 modal.style.display = "block";

}, 3000)




close.onclick = function() {
    modal.style.display = "none";
    }

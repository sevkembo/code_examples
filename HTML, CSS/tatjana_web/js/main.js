// SCRIPT MENU
const $menu = $('.mnu-top')

$(document).mouseup(e => {
  if($(".mnu-top").hasClass("menu__active")){
     if((!$menu.is(e.target) && $menu.has(e.target).length === 0 
   && !($(e.target).hasClass("menu-btn") || $(e.target).parent().hasClass("menu-btn")))){
     $('.menu-btn').click();
   }
  }
});


$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');  // На данную кнопку накладываем класс активный
    $('.mnu-top').toggleClass('menu__active')
  });
// 



// SCRIPT MODAL
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
    document.body.style.overflow = "auto";
  }
};

// SCRIPT MENU HIDE ON CLICK
 


 
 





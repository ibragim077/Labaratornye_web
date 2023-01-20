let modal_header = document.getElementById('modar-header');
let modal_window = document.getElementById('modal-window');
let modal_base = document.getElementById('modal-base');
let close_btn = document.getElementById('close');
let open_modal = document.querySelector('.link-first')

modal_header.onmousedown = function(event) {
    let coordnats = getcoordnats(modal_window);
    let x = event.pageX - coordnats.left;
    let y = event.pageY - coordnats.top;
  document.body.appendChild(modal_window);
  document.onmousemove = function(event) {
    modal_window.style.left = event.pageX - x + 'px';
    modal_window.style.top = event.pageY - y + 'px';
  };
  modal_header.onmouseup = function() {
    document.onmousemove = null;
    modal_header.onmouseup = null;
  };
};
modal_header.ondragstart = function() {
  return false;
};
function getcoordnats(window) {   
    let i = window.getBoundingClientRect();
  return {
    top: i.top + pageYOffset,
    left: i.left + pageXOffset
  };
};


//модальное окно

open_modal.addEventListener("click", function(){
    modal_base.style.display = "block";
    modal_window.style.display = "flex";
});

close_btn.addEventListener("click", function(){
    modal_base.style.display = "none";
    modal_window.style.display = "none";
});
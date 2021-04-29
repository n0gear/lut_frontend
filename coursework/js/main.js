/* const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');

const modalOpen = document.getElementById('modal-open');
const modalOpen2 = document.getElementById('modal-open2');
const modalOpen3 = document.getElementById('modal-open3');

const modalClose = document.querySelector('.modal-close');
const modalClose2 = document.querySelector('.modal-close2');
const modalClose3 = document.querySelector('.modal-close3');

// Open Modal
modalOpen.addEventListener('click', () => {
	modal.style.display = 'block';
});
// Open Modal2
modalOpen2.addEventListener('click', () => {
	modal.style.display = 'block';
});
// Open Modal3
modalOpen3.addEventListener('click', () => {
	modal.style.display = 'block';
});

// Close Modal
modalClose.addEventListener('click', () => {
	modal.style.display = 'none';
});

// Close Modal when Click Outside
window.addEventListener('click', (e) => {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}); */

// Materialize Modal
/* document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  }); */

  $(document).ready(function(){
    $('#modal1').modal();
    $('#modal1').modal('open'); 
 });
// Modal form

var modalForm = document.getElementById('display__modal');
     
 modalForm.addEventListener('click', function(e) {
     e.preventDefault();
     document.getElementById('modal').style.display = "block";
});
    //  hide modal 
var hideModal = document.getElementById('modal__overlay');
     
hideModal.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modal').style.display = "none";
});

//Login form
var modalLoginForm = document.getElementById('auth__form--login--btn');

modalLoginForm.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('auth__form--login').style.display = "block";
    document.getElementById('auth__form--one').style.display = "none";
})

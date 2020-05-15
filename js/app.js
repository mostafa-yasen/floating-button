
var btnAction = document.querySelector(".action");

function actionToggle () {
    btnAction.classList.toggle("active");
}
btnAction.addEventListener("click", actionToggle);

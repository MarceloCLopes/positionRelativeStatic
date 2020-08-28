const $elemetExampleFirst = document.querySelector(".elementExample_first");

const $elemetExampleLast = document.querySelector(".elementExample_last");

$elemetExampleFirst.addEventListener("click", function (event) {
  this.classList.toggle('elementExample_isActive');
  $elemetExampleLast.classList.add('elementExample_isActive');
})

$elemetExampleLast.addEventListener('click', function (event) {
  this.classList.toggle('elementExample_isActive');
  $elemetExampleFirst.classList.add('elementExample_isActive');
})
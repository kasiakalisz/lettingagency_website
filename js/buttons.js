/*
PROJECT: CAPSTONE
DATE: 15/10/2021
AUTHORS (alphabetical order):
Katarzyna Kalisz
JavaScript responsible for read more/read less function applied to rent/sale page.
*/

function myFunction(dot, text, btn) {
  var dots = document.getElementById(dot);
  var moreText = document.getElementById(text);
  var btnText = document.getElementById(btn);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



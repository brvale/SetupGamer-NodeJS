var acc = document.getElementsByClassName('accordion');
var radioBtn = document.querySelectorAll('[type="radio"]');

for (let i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {

      panel.style.display = "none";

    } else {

      panel.style.display = "block";

    }
  });
}


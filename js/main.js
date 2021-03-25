const changeDisplay = document.querySelector('select');

//attemt at switching from email to number view

changeDisplay.addEventListener('click', () => {

    var x = document.getElementsByClassName('numList');
    var y = document.getElementsByClassName('emailList');

    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";

    } 
    
    else {

      x.style.display = "block";
      y.style.display = "none";

    }

 });
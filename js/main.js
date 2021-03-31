//set trigger

const ChangeDisplay = document.querySelector(".selector");

const email = document.querySelector(".emailList");
const num = document.querySelector(".numList");

function toggle() {

  if(email.style.display == "block") {

  console.log("test 1");

  email.style.display = "none";
  num.style.display = "block";

  }

  else {

    console.log("test 2");

    email.style.display = "block";
    num.style.display = "none";

  }


}


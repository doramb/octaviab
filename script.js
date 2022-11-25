function buttonInfo() {
    let name = prompt("What is your name?");

    alert("Welcome to our Octavia's Lovers clube, " + " " + name + "!");
  }
  let moreInfos = document.querySelector(".button");
  moreInfos.addEventListener("click", buttonInfo);
function toggleMode() {
  const html = document.documentElement;

  // if(html.classList.contains("light")){
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add("light");
  // }

  html.classList.toggle("light"); 

  const img = document.querySelector("#profile img");
  if(html.classList.contains("light")){
    img.src = "./assets/sun.svg";
    img.alt = "Ícone de sol";
  } else {
    img.src = "assets/foto.jpg";
  }
}
function schimba_pagina() {
    document.getElementById("nume").innerHTML =
      "Dr. Ing. Muresan Tudor-Horea <br> Cyber Intelligence";
    document.getElementById("realizari-1").innerHTML = "Realizari";
    document.getElementById("realizari-2").innerHTML = "Nu am avut restante";
    document.getElementById("realizari-3").innerHTML =
      "Am facut un curs de Python";
    document.getElementById("realizari-4").innerHTML = "Am facut un curs de Java";
    document.getElementById("realizari-5").innerHTML =
      "Am facut un curs de CyberSecurity";
    document.getElementById("blank").style.display = "none";
    document.getElementById("blank-2").style.display = "none";
    document.getElementById("poza").src = "tudor2.jpg";
    document.getElementById("poza").style.borderRadius = "100px";
    document.getElementById("poza").style.opacity = "90%";
    window.scrollTo(0, 0);
    document.getElementById("body-color").style.background =
      "linear-gradient(rgb(0,101,2), black)";
    document.getElementById("body-color-2").style.background = "#0000";
    document.getElementById("body-color-3").style.background = "#0000";
    document.getElementById("poza").style.border = "#0000";
    document.getElementById("scris-1").style.textShadow = "none";
    document.getElementById("scris-1").style.color = "lightgreen";
    document.getElementById("scris-1").style.fontFamily = "Courier New";
    document.getElementById("font").style.fontFamily = "Courier New";
    document.getElementById("font").style.textShadow = "none";
    document.getElementById("font").style.color = "green";
    document.getElementById("nume").style.color = "green";
    document.getElementById("nume").style.textShadow = "none";
    document.getElementById("nume").style.fontFamily = "Courier New";
  
    //linear-gradient(blue,yellow)
  }
  function varsta() {
    return 2024 - 2005;
  }
  function over() {
    document.getElementById("hover-text").innerText = varsta() + " ani";
    document.getElementById("hover-text").style.textAlign="center";
    document.getElementById("hover-text").style.fontWeight="bold";
  }
  function notover() {
    document.getElementById("hover-text").innerText = "13 iunie 2005";
    document.getElementById("hover-text").style.textAlign="center";
    document.getElementById("hover-text").style.fontWeight="bold";
  }
  
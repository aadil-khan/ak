function toggleDark() {
  var body = document.getElementById("body");
  body.className = "dark-mode";
  document.getElementById("intro").style="background: rgba(28, 28, 28, 0.9); margin-bottom: 10px;";
  document.getElementById("resume2").style="background: rgba(28, 28, 28, 0.9); color: yellow; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:white; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:white;";
  document.getElementById("intro4").style="background: rgba(28, 28, 28, 0.9); color: white; width:350px";
  document.getElementById("intro5").style="background: rgba(28, 28, 28, 0.9); color: white; width:350px";
  document.getElementById("intro6").style="background: rgba(28, 28, 28, 0.9); color: white; width:350px";
  document.getElementById("techprof").style="background: rgba(28, 28, 28, 0.9); color: white;";
  document.getElementById("likes").style="background: rgba(28, 28, 28, 0.9); color: white;";
  
}

function toggleLight() {
  var body = document.getElementById("body");
  body.className = "light-mode";
  document.getElementById("intro").style="background: rgba(204, 204, 204, 0.8); margin-bottom: 10px;";
  document.getElementById("resume2").style="background: rgba(204, 204, 204, 0.8); color: red; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:black; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:black;";
  document.getElementById("intro4").style="background: rgba(204, 204, 204, 0.8); color: black; width:350px";
  document.getElementById("intro5").style="background: rgba(204, 204, 204, 0.8); color: black; width:350px";
  document.getElementById("intro6").style="background: rgba(204, 204, 204, 0.8); color: black; width:350px";
  document.getElementById("techprof").style="background: rgba(204, 204, 204, 0.8); color: black;";
  document.getElementById("likes").style="background: rgba(204, 204, 204, 0.8); color: black;";
}

function toggleNature() {
  document.getElementById("body").className= "nature-mode";
  document.getElementById("intro").style="background: rgba(20, 158, 5, 0.3); margin-bottom: 10px;";
  document.getElementById("resume2").style="background: rgba(20, 158, 5, 0.3); color: red; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:white; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:white;";
  document.getElementById("intro4").style="background: rgba(20, 158, 5, 0.3); color: white; width:350px";
  document.getElementById("intro5").style="background: rgba(20, 158, 5, 0.3); color: white; width:350px";
  document.getElementById("intro6").style="background: rgba(20, 158, 5, 0.3); color: white; width:350px";
  document.getElementById("techprof").style="background: rgba(20, 158, 5, 0.3); color: white;";
  document.getElementById("likes").style="background: rgba(20, 158, 5, 0.3); color: white;";
}

function toggleColor() {
	document.getElementById("body").className= "color-mode";
  document.getElementById("intro").style="background: rgba(9, 109, 171, 0.4); margin-bottom: 10px;";
  document.getElementById("resume2").style="background: rgba(9, 109, 171, 0.4); color: yellow; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:white; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:white;"
  document.getElementById("intro4").style="background: rgba(9, 109, 171, 0.4); color: white; width:350px";
  document.getElementById("intro5").style="background: rgba(9, 109, 171, 0.4); color: white; width:350px";
  document.getElementById("intro6").style="background: rgba(9, 109, 171, 0.4); color: white; width:350px";
  document.getElementById("techprof").style="background: rgba(9, 109, 171, 0.4); color: white;";
  document.getElementById("likes").style="background: rgba(9, 109, 171, 0.4); color: white;";
}


function toggleTech() {
  document.getElementById("body").className="tech-mode"; 
  document.getElementById("intro").style="background: rgba(28, 28, 28, 0.7); margin-bottom: 10px;";
  document.getElementById("resume2").style="background: rgba(28, 28, 28, 0.7); color: yellow; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:white; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:white;"
  document.getElementById("intro4").style="background: rgba(28, 28, 28, 0.7); color: white; width:350px";
  document.getElementById("intro5").style="background: rgba(28, 28, 28, 0.7); color: white; width:350px";
  document.getElementById("intro6").style="background: rgba(28, 28, 28, 0.7); color: white; width:350px";
  document.getElementById("techprof").style="background: rgba(28, 28, 28, 0.7); color: white;";
  document.getElementById("likes").style="background: rgba(28, 28, 28, 0.7); color: white;";
}
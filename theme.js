function toggleDark() {
  var body = document.getElementById("body");
  body.className = "dark-mode";
  document.getElementsByTagName("META")[0].content = "#121212";
  document.getElementById("intro").style="background: rgba(28, 28, 28, 0.9); margin-bottom: 10px; padding-top: 15px; padding-bottom: 25px;";
  document.getElementById("resume2").style="background: rgba(28, 28, 28, 0.9); color: yellow; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:white; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:white;";
  document.getElementById("intro4").style="background: rgba(28, 28, 28, 0.9); color: white; width:350px";
  document.getElementById("intro5").style="background: rgba(28, 28, 28, 0.9); color: white; width:350px";
  document.getElementById("intro6").style="background: rgba(28, 28, 28, 0.9); color: white; width:350px";
  document.getElementById("techprof").style="background: rgba(28, 28, 28, 0.9); color: white; padding-top: 15px; padding-bottom: 15px;";
  document.getElementById("likes").style="background: rgba(28, 28, 28, 0.9); color: white; padding-top: 15px; padding-bottom: 15px;";
  
  document.getElementById("theme_button").className= "btn btn-warning";
  document.getElementById("dark_mode").className= "btn btn-info";
  document.getElementById("light_mode").className= "btn btn-info";
  document.getElementById("nature_mode").className= "btn btn-info";
  document.getElementById("color_mode").className= "btn btn-info";
  document.getElementById("tech_mode").className= "btn btn-info";
 
  
}

function toggleLight() {
  var body = document.getElementById("body");
  body.className = "light-mode";
  document.getElementsByTagName("META")[0].content = "#c2c2c2";
  document.getElementById("intro").style="background: rgba(204, 204, 204, 0.8); margin-bottom: 10px; padding-top: 15px; padding-bottom: 25px;";
  document.getElementById("resume2").style="background: rgba(204, 204, 204, 0.8); color: red; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:black; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:black;";
  document.getElementById("intro4").style="background: rgba(204, 204, 204, 0.8); color: black; width:350px";
  document.getElementById("intro5").style="background: rgba(204, 204, 204, 0.8); color: black; width:350px";
  document.getElementById("intro6").style="background: rgba(204, 204, 204, 0.8); color: black; width:350px";
  document.getElementById("techprof").style="background: rgba(204, 204, 204, 0.8); color: black; padding-top: 15px; padding-bottom: 15px;";
  document.getElementById("likes").style="background: rgba(204, 204, 204, 0.8); color: black; padding-top: 15px; padding-bottom: 15px;";
  
  document.getElementById("theme_button").className= "btn btn-success";
  document.getElementById("dark_mode").className= "btn btn-info";
  document.getElementById("light_mode").className= "btn btn-info";
  document.getElementById("nature_mode").className= "btn btn-info";
  document.getElementById("color_mode").className= "btn btn-info";
  document.getElementById("tech_mode").className= "btn btn-info";
}

function toggleNature() {
  document.getElementById("body").className= "nature-mode";
  document.getElementsByTagName("META")[0].content = "#46b363";
  document.getElementById("intro").style="background: rgba(20, 158, 5, 0.3); margin-bottom: 10px; padding-top: 15px; padding-bottom: 25px;";
  document.getElementById("resume2").style="background: rgba(20, 158, 5, 0.3); color: red; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:white; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:white;";
  document.getElementById("intro4").style="background: rgba(20, 158, 5, 0.3); color: white; width:350px";
  document.getElementById("intro5").style="background: rgba(20, 158, 5, 0.3); color: white; width:350px";
  document.getElementById("intro6").style="background: rgba(20, 158, 5, 0.3); color: white; width:350px";
  document.getElementById("techprof").style="background: rgba(20, 158, 5, 0.3); color: white; padding-top: 15px; padding-bottom: 15px;";
  document.getElementById("likes").style="background: rgba(20, 158, 5, 0.3); color: white; padding-top: 15px; padding-bottom: 15px;";
  
  document.getElementById("theme_button").className= "btn btn-primary";
  document.getElementById("dark_mode").className= "btn btn-success";
  document.getElementById("light_mode").className= "btn btn-success";
  document.getElementById("nature_mode").className= "btn btn-success";
  document.getElementById("color_mode").className= "btn btn-success";
  document.getElementById("tech_mode").className= "btn btn-success";
}

function toggleColor() {
	document.getElementById("body").className= "color-mode";
	document.getElementsByTagName("META")[0].content = "#717dd9";
  document.getElementById("intro").style="background: rgba(9, 109, 171, 0.4); margin-bottom: 10px; padding-top: 15px; padding-bottom: 25px;";
  document.getElementById("resume2").style="background: rgba(9, 109, 171, 0.4); color: yellow; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:white; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:white;"
  document.getElementById("intro4").style="background: rgba(9, 109, 171, 0.4); color: white; width:350px";
  document.getElementById("intro5").style="background: rgba(9, 109, 171, 0.4); color: white; width:350px";
  document.getElementById("intro6").style="background: rgba(9, 109, 171, 0.4); color: white; width:350px";
  document.getElementById("techprof").style="background: rgba(9, 109, 171, 0.4); color: white; padding-top: 15px; padding-bottom: 15px;";
  document.getElementById("likes").style="background: rgba(9, 109, 171, 0.4); color: white; padding-top: 15px; padding-bottom: 15px;";
  
  document.getElementById("theme_button").className= "btn btn-success";
  document.getElementById("dark_mode").className= "btn btn-primary";
  document.getElementById("light_mode").className= "btn btn-primary";
  document.getElementById("nature_mode").className= "btn btn-primary";
  document.getElementById("color_mode").className= "btn btn-primary";
  document.getElementById("tech_mode").className= "btn btn-primary";
}


function toggleTech() {
  document.getElementById("body").className="tech-mode"; 
  document.getElementsByTagName("META")[0].content = "#05c7f2";
  document.getElementById("intro").style="background: rgba(28, 28, 28, 0.7); margin-bottom: 10px; padding-top: 15px; padding-bottom: 25px;";
  document.getElementById("resume2").style="background: rgba(28, 28, 28, 0.7); color: yellow; margin-bottom: 10px; margin-top: 10px; padding-bottom: 10px; padding-top: 10px;";
  document.getElementById("intro2").style="color:white; margin-top:20px; text-align: center; text-shadow: 1pt 1pt 1pt blue; font-variant: small-caps; !important;";
  document.getElementById("intro3").style="color:white;"
  document.getElementById("intro4").style="background: rgba(28, 28, 28, 0.7); color: white; width:350px";
  document.getElementById("intro5").style="background: rgba(28, 28, 28, 0.7); color: white; width:350px";
  document.getElementById("intro6").style="background: rgba(28, 28, 28, 0.7); color: white; width:350px";
  document.getElementById("techprof").style="background: rgba(28, 28, 28, 0.7); color: white; padding-top: 15px; padding-bottom: 15px;";
  document.getElementById("likes").style="background: rgba(28, 28, 28, 0.7); color: white; padding-top: 15px; padding-bottom: 15px;";
  
  document.getElementById("theme_button").className= "btn btn-success";
  document.getElementById("dark_mode").className= "btn btn-info";
  document.getElementById("light_mode").className= "btn btn-info";
  document.getElementById("nature_mode").className= "btn btn-info";
  document.getElementById("color_mode").className= "btn btn-info";
  document.getElementById("tech_mode").className= "btn btn-info";
}
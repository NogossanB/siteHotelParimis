var myImages = 0;
MesImages();

function MesImages() {
  var i;
  var x = document.getElementsByClassName("img-diapo");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myImages++;
  if (myImages > x.length) {myImages = 1}    
  x[myImages-1].style.display = "block";  
  setTimeout(MesImages, 2000); // Change image every 2 seconds
}

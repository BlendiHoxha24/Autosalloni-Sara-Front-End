let print = console.log;

const photoPlace = document.getElementById('slide');
let i = 0;


// function openImage(lokacioni){
//     let img = new Image();
//     img.src = lokacioni;
//     let imagediv = document.getElementById("imageWholeScreen");
//     imagediv.style.visibility = 'visible';
//     document.getElementById("imageWholeScreen").appendChild(img);
// }
// function clearImage(){
//     let imagediv = document.getElementById("imageWholeScreen");
//     imagediv.innerHTML = "";
//     imagediv.style.visibility = 'hidden';
// }
function nextPhoto(){
    //<div class = "slide">
    // <img src="parentCarPhotos/SlideShowTest/w212-4.jpg" alt="" onclick="openImage('parentCarPhotos/SlideShowTest/w212-4.jpg')">
    // </div>
    // <div class = "slide">
    // <img src="parentCarPhotos/SlideShowTest/w212-3.jpg" alt="" onclick="openImage('parentCarPhotos/SlideShowTest/w212-3.jpg')">
    // </div>
    // <div class = "slide">
    //   <img src="parentCarPhotos/SlideShowTest/w212-5.jpg" alt="" onclick="openImage('parentCarPhotos/SlideShowTest/w212-5.jpg')">
    // </div>
    const fotot = ["parentCarPhotos/SlideShowTest/w212-4.jpg","parentCarPhotos/SlideShowTest/w212-3.jpg","parentCarPhotos/SlideShowTest/w212-5.jpg","parentCarPhotos/SlideShowTest/w212-1.jpg"];
          
          photoPlace.innerHTML = "<img src = " + fotot[i] + " onclick=" + "openImage('" + fotot[i] + "')" + "> " + '<button class = "nextButton"onclick="nextPhoto()">Next</button>';
    
    i++;
    if(i>=fotot.length){
        i = 0;
    }

}


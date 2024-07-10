

const images = document.querySelectorAll(".pic");

// keep track of the currently enlarged image 
let curr = null;


images.forEach((photo) => {
    
    photo.classList.add("notenlarged");

    photo.dataset.originalHeight = photo.clientHeight;
    photo.dataset.originalWidth = photo.clientWidth;
    photo.addEventListener("click", function() {
        console.log("hello,", photo);
        // check if another image is currently enlarged 
        if (curr && curr !== photo){
            // resize current image and set curr to null
            curr.style.height = `${curr.dataset.originalHeight}px`;
            curr.style.width = `${curr.dataset.originalWidth}px`;
            curr.classList.remove("enlarged");
            curr.classList.add("notenlarged");
            curr = null;
        }

        if (photo.classList.contains("notenlarged")){
            photo.style.height = "400px";
            photo.style.width = "470px";
            photo.classList.add("enlarged");
            photo.classList.remove("notenlarged");
            curr = photo;
        }
        else{
            console.log("shrinking");
            photo.style.height = `${photo.dataset.originalHeight}px`;
            photo.style.width = `${photo.dataset.originalWidth}px`;
            photo.classList.remove("enlarged");
            photo.classList.add("notenlarged");
        }
      })
});



const logot = document.getElementById("logot");
const logo = document.getElementById("logo");
logot.addEventListener("click", () => {
    if (logo.classList.contains("spin")) {
        logo.classList.remove("spin");
    } else {
        logo.classList.add("spin");
    }
});

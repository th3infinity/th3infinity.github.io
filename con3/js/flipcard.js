var flipped = false;
var start = Date.now();

function flipBack(obj) {
    if (!flipped && Date.now() - start > 50){
        console.log("triggered back");
        obj.style.transform = "rotateY(180deg)";
        flipped = true;
        start = Date.now();
    }
        
}

function flipFront(obj) {
    if (flipped && Date.now() - start > 50) {
        console.log("triggered front");
        obj.style.transform = "rotateY(0deg)";
        flipped = false;
        start = Date.now();
    }  
}
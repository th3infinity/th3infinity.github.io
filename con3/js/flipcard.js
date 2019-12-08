var flipped = false;

function flipBack(obj) {
    if (!flipped){
        obj.style.transform = "rotateY(180deg)";
        flipped = true;
    }
        
}

function flipFront(obj) {
    if (flipped) {
        obj.style.transform = "rotateY(0deg)";
        flipped = false;
    }  
}
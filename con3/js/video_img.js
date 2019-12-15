var images = [];

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}

for (var i = 0; i < 181; i++) {
    images.push("img/intro/animation_intro" + (i).pad(3) + ".png");
}

var obj = { curImg: 0 };

var tween = TweenMax.to(obj, 0.5, {
    curImg: images.length - 1, // animate propery curImg to number of images
    roundProps: "curImg", // only integers so it can be used as an array index
    //repeat: 3, // repeat 3 times
    immediateRender: true, // load first image automatically
    ease: Linear.easeNone, // show every image the same ammount of time
    onUpdate: function() {
        $("#introImg").attr("src", images[obj.curImg]); // set the image source
    }
});

// build scene
var videoImgScene = new ScrollMagic.Scene({ duration: 2200, offset: 400 })
    .setTween(tween)
    .addTo(controller);
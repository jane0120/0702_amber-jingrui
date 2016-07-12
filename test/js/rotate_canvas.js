/**
 * Created by jianyujing on 2016/7/11.
 */
$(document).ready(function () {
    var frame = 1; // 23
    var width = 0;
    var height = 0;
    var started = false;
    var images = [];
    var startedX = -1;
    var canvas = document.getElementById("car_canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 440;// window.innerWidth;
    canvas.height = 691;//window.innerHeight;
    width = canvas.width;
    height = canvas.height;
    var bar = document.getElementById('loadProgressBar');
    for (var i = 1; i < 24; i++) {
        bar.value = i;
        if (i < 10) {
            images[i] = new Image();
            images[i].src = "0" + i + ".jpg";
        }
        else {
            images[i] = new Image();
            images[i].src = i + ".jpg";
        }
    }
    // mouse event
    canvas.addEventListener("mousedown", doMouseDown, false);
    canvas.addEventListener('mousemove', doMouseMove, false);
    canvas.addEventListener('mouseup', doMouseUp, false);
    // loaded();

    // frame = 1
    frame = 1;
    images[frame].onload = function () {
        redraw();
        bar.style.display = 'none';
    }

    function doMouseDown(event) {
        var x = event.pageX;
        var y = event.pageY;
        var canvas = event.target;
        var loc = getPointOnCanvas(canvas, x, y);
        console.log("mouse down at point( x:" + loc.x + ", y:" + loc.y + ")");
        startedX = loc.x;
        started = true;
    }

    function doMouseMove(event) {
        var x = event.pageX;
        var y = event.pageY;
        var canvas = event.target;
        var loc = getPointOnCanvas(canvas, x, y);
        if (started) {
            var count = Math.floor(Math.abs((startedX - loc.x) / 30));
            var frameIndex = Math.floor((startedX - loc.x) / 30);
            while (count > 0) {
                console.log("frameIndex = " + frameIndex);
                count--;
                if (frameIndex > 0) {
                    frameIndex--;
                    frame++;
                } else if (frameIndex < 0) {
                    frameIndex++;
                    frame--;
                }
                else if (frameIndex == 0) {
                    break;
                }

                if (frame >= 24) {
                    frame = 1;
                }
                if (frame <= 0) {
                    frame = 23;
                }
                redraw();
            }
        }
    }

    function doMouseUp(event) {
        console.log("mouse up now");
        if (started) {
            doMouseMove(event);
            startedX = -1;
            started = false;
        }
    }

    function getPointOnCanvas(canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();
        return {
            x: x - bbox.left * (canvas.width / bbox.width),
            y: y - bbox.top * (canvas.height / bbox.height)
        };
    }

    function loaded() {
        setTimeout(update, 1000 / 8);
    }

    function redraw() {
        // var imageObj = document.createElement("img");
        // var imageObj = new Image();
        var imageObj = images[frame];
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(imageObj, 0, 0, width, height);
    }

    function update() {
        redraw();
        frame++;
        if (frame >= 23) frame = 1;
        setTimeout(update, 1000 / 8);
    }
});

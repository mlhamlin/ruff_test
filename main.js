var canvas_width = 1024;
var canvas_height = 576;
var ruff_x = 100;
var ruff_y = canvas_height;
var speed = 20;

var canvas;
var ctx;
var ruff_img;
var ruff_height;
var ruff_y_end;

function setup() {
    canvas = document.getElementById('canvas');
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    ctx = canvas.getContext('2d');
}

function on_play_button() {
    document.getElementById('play-button').style.display = 'none';
    load_ruff();
}

function load_ruff() {
    ruff_img = new Image();

    ruff_img.onload = function () {
        ruff_height = ruff_img.height;
        ruff_y_end = canvas_height - ruff_height;
        animate_in_ruff();
    }

    ruff_img.src = "assets/ruff_splash.png";
}

function animate_in_ruff() {

    ctx.clearRect(0, 0, canvas_width, canvas_height);

    ctx.drawImage(ruff_img, ruff_x, ruff_y);

    if (ruff_y > ruff_y_end) {
        ruff_y = ruff_y - speed;

        if (ruff_y < ruff_y_end) {
            ruff_y = ruff_y_end;
        }

        window.requestAnimationFrame(animate_in_ruff);
    }
}
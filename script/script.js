function drawDavy() {
    let canvas = document.getElementById('semaphore-display');
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(200, 150, 100, 200);

        ctx.beginPath();
        ctx.arc(250, 100, 50, 0, 360, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
}

window.addEventListener('load', drawDavy);
let leftHand = document.getElementById('left-hand');
let leftFlag = document.getElementById('left-flag');
let rightHand = document.getElementById('right-hand');
let rightFlag = document.getElementById('right-flag');

window.addEventListener('keydown', renderSemaphore);

function renderSemaphore(e) {
    let key = e.key.toLowerCase();

    if (semaphores[key]) {

        if (key == 'h' || key == 'i' || key == 'o') {
            leftFlag.setAttribute('class', 'flip-flag');
            leftHand.style.zIndex = '22';
            leftFlag.style.bottom = 0; 
            leftFlag.style.top = ''; 
        }
        else {
            leftFlag.setAttribute('class', '');
            document.getElementById('left-flag').style.bottom = ''; 
            document.getElementById('left-flag').style.top= 0; 
            leftHand.style.zIndex = '-1';
        }

        if (key == 'w' || key == 'x' || key == 'z') {
            rightFlag.setAttribute('class', 'flip-flag');
            rightFlag.style.top = 0;
            rightFlag.style.bottom = '';
            rightHand.style.zIndex = '22';
        }
        else {
            rightHand.style.zIndex = -1;
            rightFlag.setAttribute('class', '');
            document.getElementById('right-flag').style.bottom = 0;
            document.getElementById('right-flag').style.top = '';
        }

        leftHand.style.rotate = semaphores[e.key.toLowerCase()].left + 'deg';
        rightHand.style.rotate = semaphores[e.key.toLowerCase()].right + 'deg';
    }

}
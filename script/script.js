let leftHand = document.getElementById('left-hand');
let rightHand = document.getElementById('right-hand');

window.addEventListener('keydown', renderSemaphore);

function renderSemaphore(e) {
    if (semaphores[e.key.toLowerCase()]) {
        /*Testing something Temporary Conditional Below*/
        if(e.key == 'h'){
            document.getElementById('left-flag').setAttribute('class', 'flip-left')
        }
        else{
            document.getElementById('left-flag').setAttribute('class', '');
        }
        
        leftHand.style.rotate = semaphores[e.key.toLowerCase()].left + 'deg';
        rightHand.style.rotate = semaphores[e.key.toLowerCase()].right + 'deg';
    }
}
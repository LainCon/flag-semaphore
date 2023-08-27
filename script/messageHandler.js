let message = document.getElementById('input-message');
let displayTxt = document.getElementById('display-text');
let signalBtn = document.getElementById('signal-btn');
let resetBtn = document.getElementById('reset-btn');

signalBtn.addEventListener('click', signalMessage);
resetBtn.addEventListener('click', reloadPage);

function signalMessage() {
    let messageTxt = message.value + ' ';
    let count = 0;

    for (let char of messageTxt) {

        if(char.match(/[A-Za-z\s]/)){

            setTimeout(() => {
                displayTxt.innerText = char.toUpperCase();
                renderSemaphore(char);
            }, 1000*count);

            count++;
        }
    }

}

function reloadPage(){
    location.reload();
}
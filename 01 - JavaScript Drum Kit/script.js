const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('audio[data-key]');

sounds.forEach((sound) => {
    sound.addEventListener("pause", removePlaying);
})

document.querySelector('body').addEventListener('keydown', keyPressed);

function keyPressed(e) {
    console.log(e.which);
    let keyCode = e.which;
    console.log(keyCode)
    keys.forEach((key) => {
        console.log(key.getAttribute('data-key'));
            if (key.getAttribute('data-key') == keyCode) {
                key.classList.add('playing');
                // key.classList.remove('playing');
            }
    })

    sounds.forEach(sound => {
        
        if(sound.getAttribute('data-key') == keyCode) {
            sound.currentTime= 0;
            sound.play();
        }
    })
}

function removePlaying(e) {
    let soundCode = e.target['data-key'];
    keys.forEach(key => {
        if(key['data-key'] === soundCode) {
            key.classList.remove('playing');
        }
    })
}
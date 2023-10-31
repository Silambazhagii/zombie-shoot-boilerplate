// Iteration 1: Declare variables required for this game

const body = document.getElementById("game-body")

// Iteration 1.2: Add shotgun sound

let shotgun_sound = new Audio("assets/shotgun.wav");

body.onclick = () => {
    shotgun_sound.pause();
    shotgun_sound.currentTime = 0;
    shotgun_sound.play();
}

// Iteration 1.3: Add background sound

const bgm = new Audio("assets/bgm.mp3")
bgm.play()
bgm.loop = true;

// Iteration 1.4: Add lives

let lives = 4;
let zombie_no = 1;

// Iteration 2: Write a function to make a zombie

function makezombie() {
    body.innerHTML += `<img src = 'assets/zombie-${getrandomint(1, 6)}.png' class = 'zombie-image' id ='zombie${zombie_no}' />`
    let currentzombie = document.getElementById(`zombie${zombie_no}`)
    currentzombie.style.transform = `translateX(${getrandomint(10, 90)}vw`
    currentzombie.onclick = () => {
        destroy(currentzombie)
    }

}
makezombie()

function destroy(zombie) {
    zombie.style.display = "none"
    zombie_no++
    makezombie()

}

// Iteration 3: Write a function to check if the player missed a zombie

function check_zombie(zombie) {
    console.log(zombie.getBoundingClientRect())
    if (zombie.getBoundingClientRect().top <= 0) {
        destroy(zombie);
        lives--
        if (lives == 0) {
            location.href = "game-over.html"
        }
    }

}


// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer between min and max

function getrandomint(min, max) {
    return min + Math.ceil(Math.random() * (max - min))

}
// makezombie( )


let countdown = 60;

const timeinterval = setInterval(() => {
    const timer = document.getElementById('timer');
    timer.innerText = countdown;
    countdown--;
    let currentzombie = document.querySelector(`#zombie${zombie_no}`)
    check_zombie(currentzombie)
    if (countdown == 0) {
        window.location.href = 'game-over.html'
    }

}, 1000);
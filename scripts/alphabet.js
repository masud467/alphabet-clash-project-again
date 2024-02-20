// function play(){
//     const getHomeScreen = document.getElementById('home-screen')
//     getHomeScreen.classList.add('hidden')

//     const getPlayGround = document.getElementById('play-ground')
//     getPlayGround.classList.remove('hidden')
// }

const audio = new Audio();

let isGamePlay = false

function handleKeyboardButtonPressed(event){
    if(isGamePlay === false) return
    const playPressed = event.key
    console.log('player pressed', playPressed)

    if(playPressed === 'Enter'){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playPressed, expectedAlphabet)
    
    if(playPressed === expectedAlphabet){

        audio.src='audio/correct.mp3';
        audio.play()

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)

        removeBackgroundColorById(expectedAlphabet)
        continueGame()

       
    }
    else{
        audio.src='audio/wrong-answer.mp3';
        audio.play()
        console.log('you lost your life')
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife) 

        

        if(updatedLife === 0){
            gameOver()
    }
    
    }
}
document.addEventListener('keyup', handleKeyboardButtonPressed)
 
function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    setBackgroundColorById(alphabet)
}


function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    setTextElementValueById('current-score', 0)
    setTextElementValueById('current-life', 5)
   

    isGamePlay =true
    continueGame()
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
   

    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore)

    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)

    isGamePlay =false
}
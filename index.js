//Variables that match to each card in the HTML 1-9. 
var one = document.getElementById('boxOne');
var two = document.getElementById('boxTwo');
var three = document.getElementById('boxThree');
var four = document.getElementById('boxFour');
var five = document.getElementById('boxFive');
var six = document.getElementById('boxSix');
var seven = document.getElementById('boxSeven');
var eight = document.getElementById('boxEight');
var nine = document.getElementById('boxNine');

//When the window loads it automatically starts with player ones turn.
window.onload = function() {
    playerOneTurn();
}

//This is the reset button.
document.getElementById('reset').addEventListener('click', () =>{
    $(".marker").text('I');
    tieCount = -2;
});

//This activates for player ones turn (X)
function playerOneTurn(){

    let xTurn = document.getElementById('whoTurn');
    xTurn.textContent = "It is X's turn.";

    $("body").css({background:'linear-gradient(aqua, rgb(109, 2, 128))'})

    document.getElementById('boxOne').addEventListener('click', () =>{
        $( "#boxOne" ).text('X')
    });
    document.getElementById('boxTwo').addEventListener('click', () =>{
        $( "#boxTwo" ).text('X')
    });
    document.getElementById('boxThree').addEventListener('click', () =>{
        $( "#boxThree" ).text('X')
    });
    document.getElementById('boxFour').addEventListener('click', () =>{
        $( "#boxFour" ).text('X')
    });
    document.getElementById('boxFive').addEventListener('click', () =>{
        $( "#boxFive" ).text('X')
    });
    document.getElementById('boxSix').addEventListener('click', () =>{
        $( "#boxSix" ).text('X')
    });
    document.getElementById('boxSeven').addEventListener('click', () =>{
        $( "#boxSeven" ).text('X')
    });
    document.getElementById('boxEight').addEventListener('click', () =>{
        $( "#boxEight" ).text('X')
    });
    document.getElementById('boxNine').addEventListener('click', () =>{
        $( "#boxNine" ).text('X')
    });
}


//This activates for player two's turn (O)
function playerTwoTurn(){

    let oTurn = document.getElementById('whoTurn');
    oTurn.textContent = "It is O's turn.";

    $("body").css({background:'linear-gradient(orange, red)'});

    document.getElementById('boxOne').addEventListener('click', () =>{
        $( "#boxOne" ).text('O')
    });
    document.getElementById('boxTwo').addEventListener('click', () =>{
        $( "#boxTwo" ).text('O')
    });
    document.getElementById('boxThree').addEventListener('click', () =>{
        $( "#boxThree" ).text('O')
    });
    document.getElementById('boxFour').addEventListener('click', () =>{
        $( "#boxFour" ).text('O')
    });
    document.getElementById('boxFive').addEventListener('click', () =>{
        $( "#boxFive" ).text('O')
    });
    document.getElementById('boxSix').addEventListener('click', () =>{
        $( "#boxSix" ).text('O')
    });
    document.getElementById('boxSeven').addEventListener('click', () =>{
        $( "#boxSeven" ).text('O')
    });
    document.getElementById('boxEight').addEventListener('click', () =>{
        $( "#boxEight" ).text('O')
    });
    document.getElementById('boxNine').addEventListener('click', () =>{
        $( "#boxNine" ).text('O')
    });
}

//This checks if there are any winning plays. 
function gameCheck(){
    if (one.innerText === 'X' && two.innerText === 'X' && three.innerText === 'X'){
        alert('The game is over! X has won!');
    } else if (three.innerText === 'X' && six.innerText === 'X' && nine.innerText === 'X'){
        alert('The game is over! X has won!');
    } else if (three.innerText === 'X' && five.innerText === 'X' && seven.innerText === 'X'){
        alert('The game is over! X has won!');
    } else if (six.innerText === 'X' && five.innerText === 'X' && four.innerText === 'X'){
        alert('The game is over! X has won!');
    } else if (two.innerText === 'X' && five.innerText === 'X' && eight.innerText === 'X'){
        alert('The game is over! X has won!');
    } else if (seven.innerText === 'X' && eight.innerText === 'X' && nine.innerText === 'X'){
        alert('The game is over! X has won!');
    } else if (one.innerText === 'X' && four.innerText === 'X' && seven.innerText === 'X'){
        alert('The game is over! X has won!');
    } else if (one.innerText === 'X' && five.innerText === 'X' && nine.innerText === 'X'){
        alert('The game is over! X has won!');

    } else if (one.innerText === 'O' && two.innerText === 'O' && three.innerText === 'O'){
        alert('The game is over! O has won!');   
    } else if (three.innerText === 'O' && six.innerText === 'O' && nine.innerText === 'O'){
        alert('The game is over! O has won!');
    } else if (three.innerText === 'O' && five.innerText === 'O' && seven.innerText === 'O'){
        alert('The game is over! O has won!');
    } else if (six.innerText === 'O' && five.innerText === 'O' && four.innerText === 'O'){
        alert('The game is over! O has won!');
    } else if (two.innerText === 'O' && five.innerText === 'O' && eight.innerText === 'O'){
        alert('The game is over! O has won!');
    } else if (seven.innerText === 'O' && eight.innerText === 'O' && nine.innerText === 'O'){
        alert('The game is over! O has won!');
    } else if (one.innerText === 'O' && four.innerText === 'O' && seven.innerText === 'O'){
        alert('The game is over! O has won!');
    } else if (one.innerText === 'O' && five.innerText === 'O' && nine.innerText === 'O'){
        alert('The game is over! O has won!');
    } else {
        return;
    }
} 

//This changes who's turn it is!
function changeTurn(){
 let currPlayer = document.getElementById('whoTurn').innerText;
    if (currPlayer === "It is X's turn."){
        playerTwoTurn();
    } else if (currPlayer === "It is O's turn."){
        playerOneTurn();
    }
}


let tieCount = 0;
function tieGame(){
    tieCount++;
    if(tieCount == 9){
        alert('Tie Game! Hit reset to try again!');
    }
}

//These listen for clicks and run a function to change the player turn and check if a win condition or draw is met.
addEventListener('click', (gameCheck)); 
addEventListener('click', (changeTurn));
addEventListener('click', (tieGame));



var player1Name = localStorage.getItem("player1Name");
var player2Name = localStorage.getItem("player2Name");

var player1Score = 0;
var player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score + " : ";
document.getElementById("player2Score").innerHTML = player2Score + " : ";

document.getElementById("playerQuestion").innerHTML = "vez de pergunta - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "vez de resposta - " + player2Name;

function send(){
    var getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("palvra em caixa baixa = " + word)

    charAt1 = word.charAt(1);
    console.log(charAt1)

    lenghtDivide2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(lenghtDivide2);
    console.log(charAt2);

    lengthMinus1 = word.lenght - 1;
    charAt3 = word.charAt(lengthMinus1)
    console.log(charAt3)

    removeCharAt1 = word.replace(charAt1, "_")
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_")

    console.log(removeCharAt3)

    question_word = "<h4 id='wordDisplay'>'Pergunta: ' + removeCharAt3</h4>"
    console.log(question_word)

    inputBox = "<br>Resposta: <input type='text' id='inputCheckBox'>"

    checkButton = "<br><br> <button class='btn btn - info' onclick='check()'>Checar</button>";

    row = question_word + inputBox + checkButton
    console.log(row)

    document.getElementById("output").value = row
    document.getElementById("word").value = " ";
}

let questionTurn = "player1";
let answerTurn = "player2";

function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    console.log(getAnswer)
    answer = getAnswer.toLowerCase()
    if (answer == word){
        if( answerTurn == "player1"){
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else{
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if(questionTurn == "player1"){
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name;
    }
    else{
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name;
    }
    if(answerTurn == "player1"){
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name

    }
    else{
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name;
    }
document.getElementById("output").innerHTML = "";
}
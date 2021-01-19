//expand standards:
const expandStandards = document.getElementById("expandStandards");
const collapseStandards = document.getElementById("collapseStandards");

let onExpandStandardsClick = function(e) {
    e.preventDefault();
    document.getElementById("standardsList").style.display = "block";
    collapseStandards.style.display = "block";
    expandStandards.style.display = "none";
};

expandStandards.addEventListener("click", onExpandStandardsClick, false);

//collapse standards:
let onCollapseStandardsClick = function(e) {
    e.preventDefault();
    document.getElementById("standardsList").style.display = "none";
    collapseStandards.style.display = "none";
    expandStandards.style.display = "block";
};

collapseStandards.addEventListener("click", onCollapseStandardsClick, false);

//make q1 button check answer, hide question and show clue 
let q1Button = document.getElementById("q1Button");

const treesPattern = new RegExp('[Tt]rees?');

let onQ1ButtonClick = function(e) {
    let answer1 = document.getElementById("answer1").value;
    if (treesPattern.test(answer1) === true) {
        e.preventDefault();
        document.getElementById('clue1Container').style.display = "block";
        document.getElementById('q1Container').style.display = "none";
        q1Button.removeEventListener("click", onQ1ButtonClick, false);
    }
}

q1Button.addEventListener("click", onQ1ButtonClick, false);

//make q2 button check answer, hide question and show clue 
let q2Button = document.getElementById("q2Button");

const decomposePattern = new RegExp('[Dd]ecomposer?s?');

let onQ2ButtonClick = function(e) {
    let answer2 = document.getElementById("answer2").value;
    if (decomposePattern.test(answer2) === true) {
        e.preventDefault();
        document.getElementById('clue2Container').style.display = "block";
        document.getElementById('q2Container').style.display = "none";
        q2Button.removeEventListener("click", onQ2ButtonClick, false);
    }
}

q2Button.addEventListener("click", onQ2ButtonClick, false);


//make q3 button check answer, hide question and show clue 
let q3Button = document.getElementById("q3Button");

const energyPattern = new RegExp('[Ee]nergy');

let onQ3ButtonClick = function(e) {
    let answer3 = document.getElementById("answer3").value;
    if (energyPattern.test(answer3) === true) {
        e.preventDefault();
        document.getElementById('clue3Container').style.display = "block";
        document.getElementById('q3Container').style.display = "none";
        q3Button.removeEventListener("click", onQ3ButtonClick, false);        
    }
}

q3Button.addEventListener("click", onQ3ButtonClick, false);

//make q4 button check answer, hide question and show clue 
let q4Button = document.getElementById("q4Button");

const ratsPattern = new RegExp('[Rr]ats?');

let onQ4ButtonClick = function(e) {
    let answer4 = document.getElementById("answer4").value;
    if (energyPattern.test(answer4) === true) {
        e.preventDefault();
        document.getElementById('clue4Container').style.display = "block";
        document.getElementById('q4Container').style.display = "none";
        q4Button.removeEventListener("click", onQ4ButtonClick, false);
        ratButton.removeEventListener("click", onRatButtonClick, false);
        notRatButton.removeEventListener("click", onNotRatButtonClick, false);
    }
}

q4Button.addEventListener("click", onQ4ButtonClick, false);


//make q4 RAT button to hide question and show clue 
let ratButton = document.getElementById("ratButton");

let onRatButtonClick = function() {
    document.getElementById('clue4Container').style.display = "block";
    document.getElementById('q4Container').style.display = "none";
    ratButton.removeEventListener("click", onRatButtonClick, false);
    notRatButton.removeEventListener("click", onNotRatButtonClick, false);
    q4Button.removeEventListener("click", onQ4ButtonClick, false);
}

ratButton.addEventListener("click", onRatButtonClick, false);

//make q4 NOT RAT button (everywhere else on the image) to alert "Keep Trying!"
let notRatButton = document.getElementById('q4Image');

let onNotRatButtonClick = function() {
    alert("Not quite. Keep trying!");
}

notRatButton.addEventListener("click", onNotRatButtonClick, false);

//make q5 button check answer, hide question and show clue 
let q5Button = document.getElementById("q5Button");

const runPattern = new RegExp('[Rr][Uu][Nn]');

let onQ5ButtonClick = function(e) {
    let answer5 = document.getElementById("answer5").value;
    if (runPattern.test(answer5) === true) {
        e.preventDefault();
        document.getElementById('clue5Container').style.display = "block";
        document.getElementById('q5Container').style.display = "none";
        q5Button.removeEventListener("click", onQ5ButtonClick, false);
    }
}

q5Button.addEventListener("click", onQ5ButtonClick, false);


//make q6 button check answer, hide question and show clue 
let q6Button = document.getElementById("q6Button");

let onQ6ButtonClick = function(e) {
    let answer6 = document.getElementById("answer6").value;
    if (answer6 === "3") {
        e.preventDefault();
        document.getElementById('clue6Container').style.display = "block";
        document.getElementById('q6Container').style.display = "none";
        q6Button.removeEventListener("click", onQ6ButtonClick, false);
        xButton.removeEventListener("click", onXButtonClick, false);
        notXButton.removeEventListener("click", onNotXButtonClick, false);
    }
}

q6Button.addEventListener("click", onQ6ButtonClick, false);


//make "x" picture button check answer, hide question and show clue 
let xButton = document.getElementById("xButton");

let onXButtonClick = function(e) {
    document.getElementById('clue6Container').style.display = "block";
    document.getElementById('q6Container').style.display = "none";
    q6Button.removeEventListener("click", onQ6ButtonClick, false);
    xButton.removeEventListener("click", onXButtonClick, false);
    notXButton.removeEventListener("click", onNotXButtonClick, false);
}

xButton.addEventListener("click", onXButtonClick, false);

//make "Not x" picture button (anywhere else on the image) alert "Not quite":
let notXButton = document.getElementById('q6Image');

let onNotXButtonClick = function() {
    alert("Not quite! Keep trying!");
};

notXButton.addEventListener("click", onNotXButtonClick, false);

//make q7 button check answer, hide question and show clue 
let q7Button = document.getElementById("q7Button");

const wPattern = new RegExp('[Ww]');

let onQ7ButtonClick = function(e) {
    let answer7 = document.getElementById("answer7").value;
    if (wPattern.test(answer7) === true) {
        e.preventDefault();
        document.getElementById('clue7Container').style.display = "block";
        document.getElementById('q7Container').style.display = "none";
        q7Image.removeEventListener("mousemove", drawOnMouseMove, false);
        q7Button.removeEventListener("click", onQ7ButtonClick, false);
        clearMarkerButton.removeEventListener("click", clearMarkerOnButtonClick, false);
    }
}

q7Button.addEventListener("click", onQ7ButtonClick, false);

//user can draw on q7 picture by holding mouse button down and mousing over:
let q7Image = document.getElementById("q7Image");

let drawOnMouseMove = function(event) {
    let q7ImageWrapper = document.getElementById('q7ImageWrapper');
    let marker = document.createElement("div");
    marker.className = "marker";
    q7ImageWrapper.insertBefore(marker, q7Image);
    let q7ImageRect = q7Image.getBoundingClientRect();  //gives the distance to viewport
    marker.style.top = event.clientY - q7ImageRect.y + "px"; 
    marker.style.left = event.clientX - q7ImageRect.x  + "px"; 
};

q7Image.addEventListener("mousemove", drawOnMouseMove, false);

//button to clear marker and start over:
let clearMarkerButton = document.getElementById("clearMarkerButton");

let clearMarkerOnButtonClick = function() {
    let allMarker = document.querySelectorAll(".marker");
    for (i = 0; i < allMarker.length; i++) {
        allMarker[i].remove();
    };
};

clearMarkerButton.addEventListener("click", clearMarkerOnButtonClick, false);

//make q8 button check answer, hide question and show clue 
let q8Button = document.getElementById("q8Button");

const climatePattern = new RegExp('[Cc]limate');

let onQ8ButtonClick = function(e) {
    let answer8 = document.getElementById("answer8").value;
    if (climatePattern.test(answer8) === true) {
        e.preventDefault();
        document.getElementById('clue8Container').style.display = "block";
        document.getElementById('q8Container').style.display = "none";
        q8Image.removeEventListener("click", highlightOnClick, false);
        q8Button.removeEventListener("click", onQ8ButtonClick, false);
        clearHighlightButton.removeEventListener("click", clearHighlightButtonClick, false);
    }
}

q8Button.addEventListener("click", onQ8ButtonClick, false);

//user can highlight on q8 picture by clicking:
let q8Image = document.getElementById("q8Image");

let highlightOnClick = function(event) {
    let q8ImageWrapper = document.getElementById('q8ImageWrapper');
    let highlighter = document.createElement("div");
    highlighter.className = "highlighter";
    q8ImageWrapper.insertBefore(highlighter, q8Image);
    let q8ImageRect = q8Image.getBoundingClientRect();  
    //gives the distance to viewport; subtract radius (fifteen) to center the mark:
    highlighter.style.top = event.clientY - q8ImageRect.y - 15 + "px"; 
    highlighter.style.left = event.clientX - q8ImageRect.x  - 15 + "px"; 
};

q8Image.addEventListener("click", highlightOnClick, false);

//button to clear highlight and start over:
let clearHighlightButton = document.getElementById("clearHighlightButton");

let clearHighlightOnButtonClick = function() {
    let allHighlights = document.querySelectorAll(".highlighter");
    for (i = 0; i < allHighlights.length; i++) {
        allHighlights[i].remove();
    };
};

clearHighlightButton.addEventListener("click", clearHighlightOnButtonClick, false);

//make q9 button check answer, hide question and show clue (solution video) 
let q9Button = document.getElementById("q9Button");
let showSolutionButton = document.getElementById('showSolutionButton');


/*function to check (and validate: "true/false") final answers about suspects
and causes of salmon famine (checkboxes and text area):*/
let onQ9ButtonClick = function(e) {
    let numberOfSuspectsChecked = 0;
    let mysteryExplanation = document.getElementsByName("mysteryExplanation")[0].value;
    let answer9 = document.getElementsByName("suspect");
    
    console.log(mysteryExplanation.length);
    //iterate through checkboxes and count the number that are checked:
    for (i = 0; i < answer9.length; i++) {      
        if (answer9[i].checked) {
            numberOfSuspectsChecked++;
        }
    }    
    
    //unless there are exactly two boxes checked, alert user to select 2 answers:
    if (numberOfSuspectsChecked > 2 || numberOfSuspectsChecked <= 1 ) {
        alert("Please select two primary suspects.");
        console.log(answer9[1].checked + ' and ' + answer9[2].checked);
        return false;
        
        /*If both checked answers are correct, but the text area response is too short,
         request more explanation:*/
    } else if (answer9[1].checked && answer9[2].checked && !(mysteryExplanation.length > 60)) {
        alert("You answered correctly! But can you please explain your answer a little more?");
        return false;

        /*If both checked answers are correct, AND the text area length is > 60 char,
        display solution, hide question and remove event listener for the button:*/
    } else if (answer9[1].checked && answer9[2].checked && mysteryExplanation.length > 60) {
        alert("You did it!");
        e.preventDefault();  //******CONSIDER REPLACING THIS TO SEND FINAL ANSWER SOMEWHERE******
        document.getElementById('solutionContainer').style.display = "block";
        document.getElementById('q9Container').style.display = "none";
        q9Button.removeEventListener("click", onQ9ButtonClick, false);
        showSolutionButton.removeEventListener("click", onShowSolutionClick, false);
        return true;

        /*If one of the answers is correct, and explanation is too short,
        notify user and ask for more information:*/
    } else if ((answer9[1].checked || answer9[2].checked) && !(mysteryExplanation.length > 60)) {
        console.log(mysteryExplanation.length);
        alert("You're almost there! Please look back at your clues, and be sure to explain your answer a little more!");
        return false;

        /*If one of the answers is correct, and explanation is long enough,
        notify user and display a button to let them show the solution:*/
    } else if ((answer9[1].checked || answer9[2].checked) && mysteryExplanation.length > 60) {
        alert("You're getting close! Keep trying, or click the 'Show Solution Button.'");
        e.preventDefault();  //******CONSIDER REPLACING THIS TO SEND FINAL ANSWER SOMEWHERE******
        showSolutionButton.style.display = "block";
        return true;  
        
        /*If neither answer is correct, and explanation is too short,
        notify user and ask for more information:*/
    } else if (!(mysteryExplanation.length > 60)) {
        alert("I'm not sure I agree. Please look back at your clues. Be sure to explain your answer!");
        return false;

        /*If neither answer is correct, but the explanation is long enough,
        notify user and display a button to let them show the solution:*/
    } else {
        alert("I'm not sure I'm convinced. Keep trying, or click the 'Show Solution Button.'");
        e.preventDefault();  //******CONSIDER REPLACING THIS TO SEND FINAL ANSWER SOMEWHERE******
        showSolutionButton.style.display = "block";
        return true;
    }
};

q9Button.addEventListener("click", onQ9ButtonClick, false);

/*show solution button to see solution video if user didn't get the answer correct
(give user control over whether to keep trying):*/
let onShowSolutionClick = function () {
    document.getElementById('solutionContainer').style.display = "block";
    document.getElementById('q9Container').style.display = "none";
    showSolutionButton.removeEventListener("click", onShowSolutionClick, false);
}

showSolutionButton.addEventListener("click", onShowSolutionClick, false)
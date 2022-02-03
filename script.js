let timerStart;
let timerStop;


function goToInput(){
    removeHidden("secondTask");
    addHidden("firstTask");
    addHidden("endedTask");
    timerStart = performance.now();
}

function finishWork(){
    if (validateInputs()){
        removeHidden("endedTask");
        addHidden("firstTask");
        addHidden("secondTask");
        timerStop = performance.now();
        displayTimeTaken();
    } else{
        displayModal();
    }
}

function goToBegin(){
    removeHidden("firstTask");
    addHidden("secondTask");
    addHidden("endedTask");
}


function removeHidden(elementId){
    const stepElement = document.getElementById(elementId);
    stepElement.classList.remove("hidden");
} 

function addHidden(elementId){
    const stepElement = document.getElementById(elementId);
    stepElement.classList.add("hidden");
}

function validateInputs(){
    const phoneInputElement = document.getElementById("phone");
    const pickupCodeInputElement = document.getElementById("pickupCode");

    return phoneInputElement.checkValidity() && pickupCodeInputElement.checkValidity();
}


function displayTimeTaken(){
    const timeTakenElement = document.getElementById("timeTaken");
    const timeTaken = Math.round((timerStop - timerStart)/1000);

    timeTakenElement.innerHTML = timeTaken;
}
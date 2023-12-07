let loadingScreenVariable = document.createElement('div');
let loadingScreenTextVariable = document.createElement('div');
let loadingScreenContainer = document.createElement('div');


loadingScreenContainer.setAttribute('class','container')
loadingScreenVariable.setAttribute('class','loadingDiv')

loadingScreenTextVariable.innerHTML = 'Loading';
loadingScreenVariable.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
loadingScreenContainer.appendChild(loadingScreenVariable);
document.body.appendChild(loadingScreenContainer);


loadingScreenContainer.style.display = "flex";
loadingScreenContainer.style.alignItems = "center";
loadingScreenContainer.style.justifyContent = "center";
loadingScreenContainer.style.height = "100vh";

function turnOnLoadingScreen(){
    loadingScreenContainer.style.display = "flex";
}

function turnOffLoadingScreen(){
    loadingScreenContainer.style.display = "none";
}

turnOnLoadingScreen();



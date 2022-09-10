function no(){
    document.documentElement.style.setProperty('--t',(Math.random()*100)+'%');
    document.documentElement.style.setProperty('--l',(Math.random()*100)+'%');
}

function yes(){
    document.getElementById('h').innerHTML = "Knew it!";
    document.getElementById('no').setAttribute('onclick','lol()');
}

function lol(){
    document.getElementById('h').innerHTML = "LOL!";
    document.getElementById('no').setAttribute('onclick','');
}
canvas = document.getElementById('mykeul');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
doSplash();

var colors = new Array(
    'black',
    'white',
    'aquamarine',
    'burlywood',
    'darkcyan',
    'darkorchid',
    'darkslategrey',
    'greenyellow',
    'hotpink'
);

function changeBackground(color){
    undoSplash();
    background = document.getElementById('background');
    background.style.background=color;
}

function changeGif(src){
    undoSplash();
    gueef = document.getElementById('gueef');
    gueef.style.display='block';
    gueef.src=src;
}

function undoGif(){
    gueef = document.getElementById('gueef');
    gueef.style.display='none';
}

function doSplash(){
    undoGif();
    gueef = document.getElementById('gifland');
    gueef.style.display='block';
    background = document.getElementById('background');
    background.style.background = '#5e66af'
    
}

function undoSplash(){
    gueef = document.getElementById('gifland');
    gueef.style.display='none';
    background = document.getElementById('background');
    background.style.background = 'white';
}

function getRandomColor(){
    var rand = Math.floor( Math.random() * (colors.length-1) );
    console.log(rand);
    return colors[rand];
}
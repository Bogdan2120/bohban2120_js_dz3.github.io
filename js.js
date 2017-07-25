console.log("Connected");

const arrey = [];
const parent = document.querySelector('.arr');
var objArrey = {
    arr : document.querySelector('#arr'),
    index : document.querySelector('#index'),
    newArr : document.querySelector('#newarr'),

    buttonOk : document.querySelector('.ok'),
    buttonPop : document.querySelector('.pop'),
    buttonShift : document.querySelector('.shift'),
    buttonPush : document.querySelector('.push')
}


function showResultInDOM(parentDOM, tagString, text) {
   let elem = document.createElement(tagString);
   elem.textContent = text;
   parentDOM.appendChild(elem);
}


function setElemToArray(value, index, arr) {
   value[index] = arr;
}

function conclusionArrey() {
    let res = "";
for (var i = 0; i < arrey.length; i++) {
    res += arrey[i]+ '; ';
} 
showResultInDOM(parent, 'p', res);
}

function conclusionRes() {
    setElemToArray(arrey, objArrey.index.value, objArrey.arr.value);
    conclusionArrey();
}
objArrey.buttonOk.addEventListener('click', conclusionRes);


function popArrey() {
    arrey.pop(); 
    conclusionArrey();
}

objArrey.buttonPop.addEventListener('click', popArrey);


function shiftArrey() {
    arrey.shift();
    conclusionArrey();
}

objArrey.buttonShift.addEventListener('click', shiftArrey);


function pushArrey() {
    arrey.push(objArrey.newArr.value);
    conclusionArrey();
}

objArrey.buttonPush.addEventListener('click', pushArrey);
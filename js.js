console.log("Connected");

const arrey = [1,2,3];
const parent = document.querySelector('.arr');

const arr = document.querySelector('#arr').value;
const index = document.querySelector('#index').value;
const newArr = document.querySelector('#newarr').value;

const buttonOk = document.querySelector('.ok');
const buttonPop = document.querySelector('.pop');
const buttonShift = document.querySelector('.shift');
const buttonPush = document.querySelector('.push');

function showResultInDOM(parentDOM, tagString, text) {
   let elem = document.createElement(tagString);
   elem.textContent = text;
   parentDOM.appendChild(elem);
}

function addArrey() {
   arrey[index] = arr;
   conclusionArrey();
}

function conclusionArrey() {
    let res = "";
for (var i = 0; i < arrey.length; i++) {
    res += arrey[i]+ '; ';
} 
showResultInDOM(parent, 'p', res);
}

buttonOk.addEventListener('click', addArrey());


function popArrey() {
    arrey.pop();
    conclusionArrey();
}

buttonPop.addEventListener('click', popArrey);


function shiftArrey() {
    arrey.shift();
    conclusionArrey();
}

buttonShift.addEventListener('click', shiftArrey);


function pushArrey() {
    arrey.push(newArr);
    conclusionArrey();
}

buttonPush.addEventListener('click', pushArrey);
'use strict';

let listItem = document.getElementById('my-item');
let orderedList = document.getElementById('ordered-list');
let textBox = document.getElementById('text-box');

orderedList.addEventListener("click", delDone);

function myFun() {
    event.preventDefault();
    let newLi = document.createElement('li');   // creat new element
    newLi.innerText = textBox.value;     // add text to new element
    newLi.classList.add('list-item');   // add class to new element
    orderedList.appendChild(newLi);     // add new element to list
    textBox.value = '';
}

function delDone () {
    let sl = event.target;
    orderedList.removeChild(sl);
    //console.log("test");
}
  
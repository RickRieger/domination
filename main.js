//===============================

function lineThrough(){
const firstLi = document.querySelector('ul> li');
firstLi.style.textDecoration = 'line-through';
};

lineThrough();

//===============================
function imgUrl(id, url){
document.getElementById(id).src = url;
};

imgUrl('image-1','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
imgUrl('image-2','https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');
imgUrl('image-3','https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60');

//===============================

function removeLastLi(){
const ul = document.querySelector('ul');
ul.removeChild(ul.lastElementChild);
}

removeLastLi();

//===============================
removeLastLi();
removeLastLi();

//===============================

function fontSize(id,fontSize){
document.getElementById(id).style.fontSize = fontSize;
}

fontSize('heading', '150px');



//======PART2=========PART2============
//=====================================


function append(domElement){
 const parent = document.querySelector('ul');
 parent.appendChild(domElement);
}

//=====================================
const element = document.createElement('img');  
append(element);


//=====================================

function imgSize(img){
    img.style.height = '30px';
}

//=====================================
const image = document.getElementById('image-2');
// console.log(image);
imgSize(image);

//=====================================

function disappear(element){
element.className = "invisible";
}

//=====================================

const element2 = document.querySelector('ol > li');
// console.log(element2);
disappear(element2);

//=========PART3=======PART3===========

function newText(text){
 const newLi = document.createElement('li');
 newLi.innerText = text;
 return newLi;
 
}

//=========================================

let li = newText('My little toe hurts today');
// console.log(li);
append(li);

//=========================================

function newHeader(size, text){
    const newHeader = document.createElement(`h${size}`);
    newHeader.innerText = text;
    return newHeader;
}
let header = newHeader(2,'this is it');
// console.log(thing);
append(header);
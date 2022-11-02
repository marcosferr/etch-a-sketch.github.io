const container = document.querySelector("#container");
let size = 16;
let width=1000;
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click',function(ev){newGrid()});


function setGrid(){
for(i=0; i<(size*size);i++){
let element = document.createElement('div');
element.classList.add('square');
element.style.width= `${width/size}px` ;
element.style.height = `${width/size}px`;
element.style.border = "thin solid yellow";
element.addEventListener('mouseover',function(ev){ 
    this.classList.add('black');
});
container.appendChild(element);
}
}
function clearGrid(){
    container.innerHTML="";
}
function newGrid(){
    clearGrid();
    let selection = parseInt(prompt('Please enter the new number of grid per side it has to be less than 100'));
    if(selection>100 || selection < 0){
        return;
    }
    size=selection;
    setGrid();

}
setGrid();

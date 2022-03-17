const addbutton = document.querySelector ('.add-button')
var input = document.querySelector('.input')
const container = document.querySelector('.container')

class item{
    constructor (itemname){
        this.createDiv(itemname)
    }
    createDiv(itemname){
        let input= document.createElement('input')
        input.value = itemname
        input.disabled = true
        input.classList.add('item-input')
        input.type ="text";
        
        
        let itemBox=document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.classList.add('editButton')
        editButton.innerHTML="EDIT";

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton')
        removeButton.innerHTML="REMOVE";

        container.appendChild(itemBox)

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', ()=> this.edit(input));

        removeButton.addEventListener('click', ()=>this.remove(itemBox));
        
        document.querySelector('.input'). value = ""


    }
        edit(input){
            input.disabled = !input.disabled;
        }
        remove(item){
           container.removeChild(item);
        }
}


function check(){
    if(input.value !=""){
        new item(input.value);
    }
};

addbutton.addEventListener('click', check);

var input = document.querySelector('.input');
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector ('.add-button').click();
    }
});
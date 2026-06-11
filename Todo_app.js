let todolist=JSON.parse(localStorage.getItem("todolist")) || [];
let tododate=JSON.parse(localStorage.getItem("tododate")) || [];
displayer();
function addTodo(){
  let input = document.querySelector(".firstTodo");
  let item = input.value;
  todolist.push(item);
  input.value = '';  // here innerText will not work cause we have use input tag,it is empty tag so no text is there to replace with.
  localStorage.setItem("todolist",JSON.stringify(todolist));
  displayer();
}
function addDate(){
  let input =document.querySelector(".firstdate");
  let item= input.value;
  tododate.push(item);
  input.value = '';
  localStorage.setItem("tododate",JSON.stringify(tododate));
  displayer();

}
function deleteTodo(index){
  todolist.splice(index,1);
  tododate.splice(index,1);

  localStorage.setItem("todolist",JSON.stringify(todolist));
  localStorage.setItem("tododate",JSON.stringify(tododate));

  displayer();
}

function displayer(){
  let display = document.querySelector(".Items-display");

  let newHtml ='';

  for(let i=0;i<todolist.length;i++){
newHtml = newHtml+ `
<span class="items">${todolist[i]}</span>
<span class="items">${tododate[i]}</span>
<button class="delete" onclick="deleteTodo(${i})">Delete</button>
`;
  }
    display.innerHTML =newHtml;
  }

/* how displayer is working :- 
> display is representing Items-display
> display.innerText/Html removing prev. /Text/Html
> new T/H are being written via for loop
>new T/H are being displayed
eg: gym [delete] 
again entering other goal : drink
it removes the prev html/text : gym [delete]
loops run for both gym and drink
both appears  with html
*/
console.log(todolist);
console.log(tododate);

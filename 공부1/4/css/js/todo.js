const Form=document.getElementById("todo-form");

const toDoInput=Form.querySelector("input");
const toDo=document.getElementById("todo-list");

const TODOS_KEY="todos";
let toDos=[];

function saveTodos()
{
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteTodo(event){
  const li=event.target.parentElement;
  li.remove();
  
  toDos=toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo){
  const list=document.createElement("li");
  list.id=newTodo.id;
  const span=document.createElement("span");
  span.innerText=newTodo.text;
  const button=document.createElement("button");
  button.innerText="🎈";
  button.addEventListener("click",deleteTodo);
  list.appendChild(span);
  list.appendChild(button);
  toDo.appendChild(list);
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo=toDoInput.value;
  toDoInput.value="";
  const newTodoObj={
    text:newTodo,
    id:Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}



Form.addEventListener("submit",handleTodoSubmit)



const savedTodos=localStorage.getItem(TODOS_KEY);

if(savedTodos !==null){
  const parsedTodos=JSON.parse(savedTodos);
  toDos=parsedTodos;
  parsedTodos.forEach(paintTodo);
}

function sayHello(item)
{
  console.log("this is the turn of",item);
}


function sexyFilter()
{
  return true;
}

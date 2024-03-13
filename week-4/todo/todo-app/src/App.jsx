import './App.css'

function App() {
  let globalId = 1;
  let todoState = [];
  let oldTodoState = [];
  

  function markAsDone(id){
    const todoElement = document.getElementById(id)
    todoElement.children[2].innerHTML = "Done"
  }

  function addTodoToDom(todo) {

    const todoDiv = document.createElement("div");
    
    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = todo.title
    
    const descDiv = document.createElement("div")
    descDiv.innerHTML = todo.description

    const btnDiv = document.createElement("button");
    btnDiv.innerHTML = "Mark as done";
    btnDiv.addEventListener("click", () => markAsDone(todo.id));
    todoDiv.appendChild(titleDiv);
    todoDiv.appendChild(descDiv);
    todoDiv.appendChild(btnDiv);
    todoDiv.setAttribute("id", todo.id);
    document.getElementById("todos").appendChild(todoDiv);

  }

  function removeTodoFromDom(todo) {
    const deleId = document.getElementById(todo.id)
    document.getElementById("todos").removeChild(deleId)
  }

  function updateTodoInDom(oldTodo, newTodo) {
    const todo = document.getElementById(oldTodo.id);
    todo.children[0].innerHTML = newTodo.title;
    todo.children[1].innerHTML = newTodo.descripton;
    todo.children[2].innerHTML = newTodo.completed
    ? "Mark as done"
    : "Done";
  }

  function updateState(newTodos) {
    // calculate the diff b/w newTodos and oldTodos.
    // More specifically, find out what todos are - 
    // 1. added
    // 2. deleted
    // 3. updated
    const added = [];
    const deleted = [];
    const updated = [];
    //add and update
   if(oldTodoState.length < newTodos.length || oldTodoState.length == newTodos.length)
        newTodos.forEach((newTodo)=>{
          const oldTodo = oldTodoState.find((todo)=>todo.id ==newTodo.id)
          if(!oldTodo){
            added.push(newTodo)
          }
          else if(oldTodo.title !== newTodo.title || oldTodo.description !== newTodo.description){
            updated.push(newTodo)
          }
        })
    
    //delete
    if(oldTodoState.length > newTodos.length){
      oldTodoState.forEach((oldTodo)=>{
        const deletedTodo = newTodos.find((todo)=>todo.id == oldTodo.id)
        if(!deletedTodo){
          deleted.push(deletedTodo)
        }
      })
    }
    added.forEach((todo) => {
      addTodoToDom(todo);
    });
    updated.forEach((newTodo) => {
      const oldTodo = oldTodoState.find((todo) => todo.id == newTodo.id);
      updateTodoInDom(oldTodo, newTodo);
    });
    deleted.forEach((todo) => {
      removeTodoFromDom(todo);
    });
    // calculate these 3 arrays
    // call addTodo, removeTodo, updateTodo functions on each of the
    // elements
    oldTodoState = [...newTodos];
  }

  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    todoState.push({
      title: title,
      description: description,
      id: globalId++,
    })
    updateState(todoState);
  }
  return (
    <>
      <input type="text" id="title" placeholder="Todo title"></input> <br /><br />
      <input type="text" id="description" placeholder="Todo description"></input> <br /><br />
      <button onClick={addTodo}>Add todo</button>
      <br /> <br />  
      <div id="todos">

      </div>
    </>
  )
}

export default App

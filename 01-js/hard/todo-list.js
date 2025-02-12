/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos=[]
  }
  add(task){
    this.todos=[...this.todos,task]
  }
  remove(index){
    this.todos = this.todos.filter((ele,id)=>id!==index)
  }
  update(index,updatedTask){
    if(index > this.todos.length - 1)
      return this.todos
    else{
      this.todos.forEach((item,i)=>{
        if(i === index){
          console.log(updatedTask)
          this.todos[i] = updatedTask
        }
      })
    }
  }
  get(index){
    if(!this.todos[index]){
      return null
    }
    return this.todos[index];
  }
  clear(){
    this.todos = [];
  }
  getAll(){
    return this.todos
  }
}

module.exports = Todo;

vuejs-sample-todo-app
=====================

A sample todo app describing how Vue.js works and is excellent.

### usage 1
var todos = [];
var todo1 = new App.$options.Models.$options.Todo(false, 'Learn Javascript!'); 
var todo2 = new App.$options.Models.$options.Todo(false, 'Learn VueJS!');
Array.prototype.push.apply(todos, [todo1,todo2]);

### usage 2
<input type="text" id="to-do-content" v-model="newToDo.content"/>
<input type="button" id="add-to-do" value="Add To-Do" v-on='click: handlerClickAddToDoButton'/>

```handlerClickAddToDoButton : function () {
	todos.push(this.newToDo);
	this.newToDo = {};
}```

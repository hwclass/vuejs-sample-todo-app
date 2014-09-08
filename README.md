vuejs-sample-todo-app
=====================

A sample todo app describing how Vue.js works and is excellent.

### usage 1
<pre>
<code lang="javascript">
	var todo1 = new App.$options.Models.$options.Todo(false, 'Learn Javascript!'); 
	var todo2 = new App.$options.Models.$options.Todo(false, 'Learn VueJS!');
	...
	Array.prototype.push.apply(todos, [todo1,todo2]);
</code>
</pre>

### usage 2
```html
	<input type="text" id="to-do-content" v-model="newToDo.content"/>
	<input type="button" id="add-to-do" value="Add To-Do" v-on='click: handlerClickAddToDoButton'/>
```

<pre>
<code lang="javascript">
	handlerClickAddToDoButton : function () {
		todos.push(this.newToDo);
		this.newToDo = {};
	}
</code>
</pre>

/*Create a Context Wrapper Object*/
var App = new Vue({
	info: 'Simple VueJS Inheritance',
	todos : [],
	Models : new Vue({
		info : 'Vue Collection of Models',
		Todo : klass(function (done, content) {
			this.done = done;
			this.content = content;
		})
	}),
	Views : new Vue({
		info : 'Vue Collection of Views'
	}),
	methods : {
		test : function () {
			console.log(App);
		}
	}
}) || {};

/*Creating and Adding New Todos Into Our App.Models.Todo Object Instance*/
var todo1 = new App.$options.Models.$options.Todo(false, 'Learn Javascript!');  
var todo2 = new App.$options.Models.$options.Todo(false, 'Learn VueJS!');
var todo3 = new App.$options.Models.$options.Todo(false, 'Do your homework!');
var todo4 = new App.$options.Models.$options.Todo(false, 'Have a rest.. :)');  

Array.prototype.push.apply(App.$options.todos, [todo1,todo2, todo3, todo4]);

/*Initialize the App*/
(function (App, Module) {
	'use strict';
	App.views = new Module({
		index : new Module({
			header : new Vue({
				el : 'header',
				data : {
					title: 'Header'
				},
				methods : {
					handlerClickHeaderText : function () {
						alert('Clicked on header title!');
					}
				}
			}),
			content : new Module({
				el : '#content',
				data: {
					title: 'To-Do List',
					text : 'Added todo items below...',
					todos: {
						title : 'Todos',
						data : App.$options.todos
					},
					newToDo : {
						done : false,
						content : ''
					}
				},
				methods : {
					handlerClickAddToDoButton : function () {
						App.$options.todos.push(this.newToDo);
						this.newToDo = {};
					}
				}
			}),
			footer : new Vue({
				el : 'footer',
				data : {
					title: 'Footer'
				},
				methods : {
					handlerClickFooterText : function () {
						alert('Clicked on footer title!');
					}
				}
			}),
		})
	});
}(App, Vue));

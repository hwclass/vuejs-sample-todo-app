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

/*Initialize the App*/
(function (App, Module) {
	'use strict';
	App.views = new Module({
		index : new Module({
			header : new Module({
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
						if (!this.isEmptyString(this.newToDo.content) && !this.isNull(this.newToDo.content) && !this.isUndefined(this.newToDo.content)) {
							App.$options.todos.push(this.newToDo);
							this.newToDo = {};
						}
					},
					isNull : function (obj) {
						return (typeof obj === null ? true : false);
					},
					isUndefined : function (obj) {
						return (typeof obj === 'undefined' ? true : false);
					},
					isEmptyString : function (str) {
						return (str == '' ? true : false);
					}
				}
			}),
			footer : new Module({
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

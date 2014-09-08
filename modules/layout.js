/*
 * Layout ViewModel
 */
(function (App, Vue) {
	'use strict';
	App.views = new Vue({
		index : new Vue({
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
			content : new Vue({
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
						if (!App.$options.methods.isEmptyString(this.newToDo.content) && !App.$options.methods.isNull(this.newToDo.content) && !App.$options.methods.isUndefined(this.newToDo.content)) {
							App.$options.todos.push(this.newToDo);
							this.newToDo = {};
						}
					}
				}
			}),
			footer : new Vue({
				el : 'footer',
				text : 'This is the footer...',
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
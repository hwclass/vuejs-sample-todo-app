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
}) || {};

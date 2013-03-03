Todos.TodoView = Ember.View.extend({
	tagName: 'label',

	doubleClick: function(event) {
		this.set('controller.isEditing', true);
	}
});

const ToDoItemsView = Backbone.View.extend({
    render: function() {
        const self = this;
        this.model.each(function(toDoItem){
            const view = new ToDoView({
                model: toDoItem
            });
            
            self.$el.append(view.render().$el);
        });

        return this;
    }
});

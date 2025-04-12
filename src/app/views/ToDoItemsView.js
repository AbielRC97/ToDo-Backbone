const ToDoItemsView = Backbone.View.extend({
    tagName: "ul",
    id:"toDoItems",
    className: "list-group",
    initialize: function(options) {
        if(!(options && options.model)){
            throw new Error("model is not specified!");
        }
    },
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

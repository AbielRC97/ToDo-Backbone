
const ToDoItem = Backbone.Model.extend({
    validate: function(attrs) {
        if(!attrs.description) {
            return "description is required";
        }
    }
});

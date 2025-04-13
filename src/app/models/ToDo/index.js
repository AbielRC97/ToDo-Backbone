
const ToDoItem = Backbone.Model.extend({
    validate: function(attrs) {
        if(!attrs.description) {
            return "description is required";
        }
    },
    toggle: function() {
        this.set("isCompleted", !this.get("isCompleted"));
    }
});

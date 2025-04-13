
const ToDoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },
    urlRoot: "https://jsonplaceholder.typicode.com/todos",
    validate: function (attrs) {
        if (!attrs.title) {
            return "description is required";
        }
    },
    toggle: function () {
        this.set("isCompleted", !this.get("isCompleted"));
    }
});

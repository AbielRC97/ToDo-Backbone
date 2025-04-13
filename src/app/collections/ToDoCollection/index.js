
const ToDoCollection = Backbone.Collection.extend({
    url: "https://jsonplaceholder.typicode.com/todos",
    model: ToDoItem
});

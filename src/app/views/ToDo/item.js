const ToDoView = Backbone.View.extend({
    tagName: "li",
    className: "list-group-item",
    events: {
        'click #toggle': 'onChecked',
    },

    template: Curso.Templates["item"],  // Esta es la función de Handlebars, no una cadena

    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error("model is not specified!");
        }
    },

    render: function () {
        // Insertar el HTML generado en el elemento de la vista
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    onChecked: function () {
        this.model.toggle();
        console.log(this.model.toJSON());
    }
});

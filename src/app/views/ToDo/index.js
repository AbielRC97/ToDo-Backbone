const ToDoItemsView = Backbone.View.extend({
    tagName: "div",
    className: "container",
    template: Curso.Templates["template"],

    events: {
        'click .btn-agregar': 'onNewItem',
        'keypress #newItem': 'onKeyPress'
    },

    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error("model is not specified!");
        }
    },

    render: function () {
        this.$el.html(this.template());

        const self = this;
        // Renderizar los ítems actuales de la colección
        this.model.each(function (toDoItem) {
            const view = new ToDoView({ model: toDoItem });
            self.$('#toDoItems').append(view.render().$el);
        });

        return this;
    },

    onNewItem: async function () {
        const inputVal = this.$('#newItem').val().trim();
        console.log('Valor del input:', inputVal);  // Verifica el valor que se está capturando

        if (inputVal) {
            const nuevoItem = new ToDoItem({ title: inputVal });
            console.log('Nuevo ítem:', nuevoItem);  // Verifica el modelo creado
            this.model.create(nuevoItem);  // Agregar a la colección
            console.log('Colección después de agregar:', this.model.toJSON());  // Verifica el contenido de la colección
            this.$('#newItem').val('');  // Limpiar el input
            Swal.fire({
                title: "Guardado",
                text: `Se agrergo correctamente el elemento ${inputVal}`,
                icon: "success"
            });
            this.render();
        } else {
            Swal.fire({
                title: "Fallo",
                text: `el titulo es requerido`,
                icon: "error"
            });
        }
    },
    onKeyPress: function (e) {
        if (e.keyCode == 13) {
            this.onNewItem();
        }
    }
});

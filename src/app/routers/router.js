const AppRouter = Backbone.Router.extend({
  routes: {
    '': 'onHome',
    'listing': 'onListing'
  },

  onHome: function () {
    const toDoItem = new ToDoItem({
      description: "Que Rico"
    });

    const toDoView = new ToDoView({
      model: toDoItem
    });
    $("#app").append(toDoView.render().$el);
  },
  onListing: function() {
    const toDoCollection = new ToDoCollection([
      new ToDoItem({
        description: "Que Rico"
      }),
      new ToDoItem({
        description: "Que Rico 2"
      })
    ]);

    const toDoItemsView = new ToDoItemsView({
      model: toDoCollection
    });
    $("#app").append(toDoItemsView.render().$el);
  }
});

const appRouter = new AppRouter();

const AppRouter = Backbone.Router.extend({
  routes: {
    '': 'onListing',
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
  onListing: async function() {
    const toDoCollection = new ToDoCollection();
    await toDoCollection.fetch();
    const toDoItemsView = new ToDoItemsView({
      model: toDoCollection
    });
    $("#app").append(toDoItemsView.render().$el);
  }
});

const appRouter = new AppRouter();

window.Todos = Ember.Application.create({
  ready: function() {
    window.addEventListener('load', function() {
      new FastClick(document.body);
    }, false);
  }
});

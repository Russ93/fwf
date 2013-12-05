App = Ember.Application.create({});

var posts = [{
  id: '1',
  title: "Filler Titles",
  author: { name: "me" },
  date: new Date('12-5-2013'),
  excerpt: "Ius no dictas voluptatum, sit case constituto an. Quo cu interesset omittantur. Vel ad atqui melius voluptatum, has audire fabulas deleniti in. Vis no natum vituperata, sit tation alterum honestatis eu.",
  body: "Lorem ipsum dolor sit amet, ad odio epicuri pro, nec inani impedit interesset eu. Elaboraret percipitur ex sed, quas audire feugait sit ex. Ius mutat dolorum ex. Vel labore volutpat et, quem autem elaboraret no pro, mei ex nihil oporteat. Pro hinc tollit ne."
}, {
  id: '2',
  title: "Who doesn't lovebacon",
  author: { name: "mr.piggy" },
  date: new Date('12-3-2013'),
  excerpt: "Ius no dictas voluptatum, sit case constituto an. Quo cu interesset omittantur. Vel ad atqui melius voluptatum, has audire fabulas deleniti in. Vis no natum vituperata, sit tation alterum honestatis eu.",
  body: "Oratio tation et mea, vim sint fabellas in. Possit placerat accusamus in per. Dicta errem disputationi has ei, sit labores luptatum ad, mel purto nulla ocurreret ne. Mea eu rebum laoreet, est suas suscipiantur ea, ea probo nostrud quaeque est. At sed idque rationibus, ius in omnis porro mollis, mei laudem feugiat et. In vis sumo consetetur, iusto zril ut est."  
}];

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
    this.get('store').commit();
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

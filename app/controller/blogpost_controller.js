const blogpost = Function.inherits('Alchemy.Controller.App', function blogpost(conduit, options) {
    blogpost.super.call(this, conduit, options);
});

blogpost.setAction(async function viewall(conduit) {
    var blogposts = await this.model.find('all')

    if (!blogposts) {
        return conduit.notFound();
    }

    this.set('blogposts', blogposts);
    this.render('blogpost/viewall');
});
blogpost.setAction(async function view(conduit, slug) {
    var blogpost = await this.model.find('first',  {conditions: {id: slug}});

    if (!blogpost) {
        return conduit.notFound();
    }

    this.set('blogpost', blogpost);
    this.render('blogpost/view');
});
blogpost.setAction(async function create(conduit) {
    // Create a new instance of the Page model
    // When this code is in an action or any class method,
    // you should use `this.getModel('Page')` instead!
    var blogpost_model = Model.get('Blogpost');
    var blogpost = blogpost_model.createDocument();

    var latblogpost = await blogpost_model.find('first');

    var id = 1;
    if (latblogpost) {
        id = latblogpost.id + 1
    }
    blogpost.id = id
    blogpost.title = conduit.body.title
    blogpost.intro = conduit.body.intro
    blogpost.body = conduit.body.body

    blogpost.save();

    conduit.redirect('/blogposts')
});

blogpost.setAction(async function remove(conduit, slug) {
    var blogpost = await this.model.find('first',  {conditions: {id: slug}});

    blogpost.remove();

    conduit.send('ok')
});
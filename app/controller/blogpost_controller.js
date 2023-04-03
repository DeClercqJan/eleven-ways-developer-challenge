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
    var blogpost = await this.model.find('first',  {conditions: {_id: slug}});
    if (!blogpost) {
        return conduit.notFound();
    }

    var comment_model = Model.get('Comment')
    var comments = await comment_model.find('all');
    var commentsFiltered = comments.filter(function (comment)  {
        if (comment.blogpost_id === slug)  {
            return comment
        }
    })

    this.set('blogpost', blogpost);
    this.set('comments', commentsFiltered);

    this.render('blogpost/view');
});
blogpost.setAction(async function create(conduit) {
    var blogpost_model = Model.get('Blogpost');
    var blogpost = blogpost_model.createDocument();

    blogpost.title = conduit.body.title
    blogpost.intro = conduit.body.intro
    blogpost.body = conduit.body.body

    blogpost.save();

    conduit.redirect('/blogposts')
});

blogpost.setAction(async function remove(conduit, slug) {
    var blogpost = await this.model.find('first',  {conditions: {_id: slug}});

    blogpost.remove();

    conduit.send('ok')
});
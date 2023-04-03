const comment = Function.inherits('Alchemy.Controller.App', function comment(conduit, options) {
    comment.super.call(this, conduit, options);
});
comment.setAction(async function create(conduit, slug) {
    var blogpost_model = Model.get('Blogpost')
    var criteria = blogpost_model.find()
    criteria.where('_id').equals(slug);
    var blogpost = await blogpost_model.find('first', criteria);

    if (!blogpost) {
        return conduit.notFound();
    }

    var comment_model = Model.get('Comment');
    var comment = comment_model.createDocument();

    comment.blogpost_id = slug
    comment.body = conduit.body
    comment.save();

    conduit.redirect('/blogposts/' + blogpost._id)
});
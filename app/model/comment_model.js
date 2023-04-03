var CommentModel = Function.inherits('Alchemy.Model.App', function Comment(options) {
    Comment.super.call(this, options);
});

CommentModel.constitute(function addFields() {
    this.addField('id', 'Integer');

    this.addField('body', 'String');

    this.addField('blogpost_id', 'String');
});
var BlogpostModel = Function.inherits('Alchemy.Model.App', function Blogpost(options) {
    Blogpost.super.call(this, options);
});

BlogpostModel.constitute(function addFields() {
    this.addField('id', 'Integer');

    this.addField('title', 'String');

    this.addField('intro', 'String');

    this.addField('body', 'Html');
});
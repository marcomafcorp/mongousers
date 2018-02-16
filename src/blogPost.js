const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogPostSchema = new Schema({
  title: String,
  content: String,
  comments: [{
    type: Schema.Types.ObjectID,
    ref: 'comment'
  }]
});

cosnt BlogPost = mongoose.mode('blogPost', BlogPostSchema);

module.exports = BlogPost;

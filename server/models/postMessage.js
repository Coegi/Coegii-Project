import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    Mobile: Number,
    Bike: [String],

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage
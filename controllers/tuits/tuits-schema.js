import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    userName: String,
    time: String,
    image: String,
    replies: Number,
    retuits: Number,
    handle: String,
    dislikes: Number,
}, {collection: 'tuits'});
export default schema;


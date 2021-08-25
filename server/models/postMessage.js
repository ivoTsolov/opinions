import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    title: String,
    message: String,
    name: String,
    creator: String,
    selectedFile: String,
    userId: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
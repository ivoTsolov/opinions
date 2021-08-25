import express from 'express';

import { getPosts, createPosts, getPost, updatePost, deletePost} from '../controllers/posts.js';
import auth  from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPosts);
router.get('/:id', getPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;
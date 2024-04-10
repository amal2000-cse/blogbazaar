import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletePost, getPosts, updatepost } from '../controllers/post.controllers.js';

const router = express.Router();

router.post('/create', verifyToken, create);
//for the getposts routes, we are making it in such a way that, even
//the normal user other than the admin will be able to get the posts,
//and also we will be able to get the posts by searching also, using the search bar
//so this route will be tricky
//so we wont be veriying the user in this route
router.get('/getposts', getPosts);
router.delete('/deletepost/:postId/:userId', verifyToken , deletePost);

//route for update post
router.put('/updatepost/:postId/:userId', verifyToken , updatepost);

export default  router;
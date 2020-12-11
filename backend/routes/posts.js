const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const PostModel = require('../models/PostModel');

router.get('/', authorize, (request, response) => {

    // Endpoint to get posts of people that currently logged in user follows or their own posts

    PostModel.getAllForUser(request.currentUser.id, (postIds) => {

        if (postIds.length) {
            PostModel.getByIds(postIds, request.currentUser.id, (posts) => {
                response.status(201).json(posts)
            });
            return;
        }
        response.json([])

    })

});

router.post('/', authorize,  (request, response) => {
    console.log('requst', request);
    PostModel.create({ ...request.body, userId: request.currentUser.id }, (data) => {
        response.status(201).json(data);
    });

});


router.put('/:postId/likes', authorize, (request, response) => {
    if(request && request.params && request.params.postId &&
        request && request.currentUser && request.currentUser.id){
        PostModel.like(request.currentUser.id, +request.params.postId, (data) => {
            response.status(200).json(data);
        });
    }

    response.status(404);
});

router.delete('/:postId/likes', authorize, (request, response) => {
    if(request && request.params && request.params.postId &&
        request && request.currentUser && request.currentUser.id){
        PostModel.unlike(request.currentUser.id, +request.params.postId, (data) => {
            response.status(200).json(data);
        });
    }

    response.status(404);
});

module.exports = router;

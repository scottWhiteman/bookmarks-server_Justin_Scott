const express = require('express');

const bookmarksRouter = express.Router();
const bodyParser = express.json();

const bookmarks = {
    title: "Google",
    url: "https://www.google.com",
    rating: 4
}

bookmarksRouter.route('/bookmarks')
    .get((req, res) => {
        res.status(200).send(bookmarks);
    })

module.exports = bookmarksRouter;
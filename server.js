const express = require('express');
const app = express();


const postsRoute = require('./routes/Posts');
const likesRoute = require('./routes/Likes');
const commentsRoute = require('./routes/Comments');
const storiesRoute = require('./routes/Stories');

app.use('/posts', postsRoute);
app.use('/likes', likesRoute);
app.use('/comments', commentsRoute);
app.use('/stories', storiesRoute)


app.listen(4000, () => {
    console.log(`It's working`)
})

// POSTS
// app.get('/posts', (req, res) => {
//     res.send('GET POSTS')
// })

// app.post('/posts', (req, res) => {
//     res.send('POST MY POSTS')
// })

// app.put('/posts', (req, res) => {
//     res.send('PUT MY POSTS')
// })

// app.delete('/posts', (req, res) => {
//     res.send('DELETE MY POSTS')
// })

// COMMENTS
// app.get('/comments', (req, res) => {
//     res.send('GET COMMENTS')
// })

// app.post('/comments', (req, res) => {
//     res.send('POST MY COMMENTS')
// })

// app.put('/comments', (req, res) => {
//     res.send('PUT MY COMMENTS')
// })

// app.delete('/comments', (req, res) => {
//     res.send('DELETE MY COMMENTS')
// })

// LIKES
// app.get('/likes', (req, res) => {
//     res.send('GET LIKES')
// })

// app.post('/likes', (req, res) => {
//     res.send('POST MY LIKES')
// })

// app.put('/likes', (req, res) => {
//     res.send('PUT MY LIKES')
// })

// app.delete('/likes', (req, res) => {
//     res.send('DELETE MY LIKES')
// })




const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('GET POSTS')
})

router.post('/', (req, res) => {
    res.send('POST MY POSTS')
})

router.put('/', (req, res) => {
    res.send('PUT MY POSTS')
})

router.delete('/', (req, res) => {
    res.send('DELETE MY POSTS')
})

module.exports = router;
const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.send('GET LIKES')
})

router.post('/', (req, res) => {
    res.send('POST MY LIKES')
})

router.put('/', (req, res) => {
    res.send('PUT MY LIKES')
})

router.delete('/', (req, res) => {
    res.send('DELETE MY LIKES')
})

module.exports = router;
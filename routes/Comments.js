const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('GET COMMENTS')
})

router.post('/', (req, res) => {
    res.send('POST COMMENTS')
})

router.put('/', (req, res) => {
    res.send('PUT COMMENTS')
})

router.delete('/', (req, res) => {
    res.send('DELETE COMMENTS')
})


module.exports = router;
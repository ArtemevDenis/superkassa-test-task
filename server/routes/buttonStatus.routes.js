const {Router} = require('express')

const router = Router()
let buttonStatus = false;

router.get('/status', (req, res) => {
    res.json({status: buttonStatus})
})


router.post('/status', (req, res) => {
    const {status} = req.body
    buttonStatus = status;
    res.json({massage: 'Ok!'})
})

module.exports = router;
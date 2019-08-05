const router = require('express')();
const tmepfnsdkafnflkfad = require('../module/auth');

router.get("/test", (req, res) => {
    console.log("우어어어");
    tmepfnsdkafnflkfad.temp1();
    res.status(200).json({"형준" : "안됨"});
})

module.exports = router;
